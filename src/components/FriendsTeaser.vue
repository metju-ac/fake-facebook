<script setup lang="ts">
import { ref } from 'vue'
import type { Friend } from '../types'

const props = defineProps<{ friends: Friend[] }>()
const preview = props.friends.slice(0, 9)
const pinnedIdx = ref<number | null>(null)

function togglePin(i: number) {
  pinnedIdx.value = pinnedIdx.value === i ? null : i
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">Přátelé</h2>
    </div>
    <div class="grid">
      <a
        v-for="(friend, i) in preview"
        :key="i"
        href="#pratele"
        class="friend-tile"
        :class="{ pinned: pinnedIdx === i }"
        @click.prevent="togglePin(i)"
      >
        <img :src="friend.photo" :alt="friend.name" class="thumb" />
        <span class="friend-name">{{ friend.name }}</span>
        <div v-if="friend.bio || friend.website" class="popup">
          <div v-if="friend.bio" class="popup-bio">{{ friend.bio }}</div>
          <a
            v-if="friend.website"
            :href="'http://' + friend.website"
            target="_blank"
            rel="noopener"
            class="popup-website"
            @click.stop
          >🌐 {{ friend.website }}</a>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: var(--color-bg-card);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  padding: var(--spacing-card);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.card-title { font-size: 20px; font-weight: 700; }
.see-all { font-size: var(--font-size-sm); color: var(--color-primary); }

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.friend-tile {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-decoration: none;
  cursor: pointer;
}

.thumb {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 6px;
  background: var(--color-action-secondary);
}

.friend-name {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.popup {
  display: none;
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-bg-card);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  padding: 10px 14px;
  z-index: 20;
  min-width: 160px;
  white-space: nowrap;
  pointer-events: auto;
}

.friend-tile:hover .popup,
.friend-tile.pinned .popup {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.popup-bio {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.popup-website {
  font-size: var(--font-size-xs);
  color: var(--color-primary);
  text-decoration: none;
}
.popup-website:hover { text-decoration: underline; }
</style>
