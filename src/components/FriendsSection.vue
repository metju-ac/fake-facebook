<script setup lang="ts">
import { ref } from 'vue'
import type { Friend } from '../types'

defineProps<{ friends: Friend[] }>()
const pinnedIdx = ref<number | null>(null)

function togglePin(i: number) {
  pinnedIdx.value = pinnedIdx.value === i ? null : i
}
</script>

<template>
  <section id="pratele" class="card">
    <h2 class="section-title">Přátelé · {{ friends.length }}</h2>
    <div v-if="friends.length" class="grid">
      <div
        v-for="(friend, i) in friends"
        :key="i"
        class="friend-tile"
        :class="{ pinned: pinnedIdx === i }"
        @click="togglePin(i)"
      >
        <img :src="friend.photo" :alt="friend.name" class="thumb" />
        <div class="friend-name">{{ friend.name }}</div>
        <div v-if="friend.mutualCount" class="mutual">{{ friend.mutualCount }} společných přátel</div>
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
      </div>
    </div>
    <div v-else class="empty">Žádní přátelé</div>
  </section>
</template>

<style scoped>
.card {
  background: var(--color-bg-card);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  padding: var(--spacing-card);
}
.section-title { font-size: 20px; font-weight: 700; margin-bottom: 16px; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }

.friend-tile {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
}

.thumb {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
  background: var(--color-action-secondary);
}

.friend-name { font-size: var(--font-size-sm); font-weight: var(--font-weight-semibold); }
.mutual { font-size: var(--font-size-xs); color: var(--color-text-secondary); }
.empty { color: var(--color-text-secondary); text-align: center; padding: 24px; }

.popup {
  display: none;
  position: absolute;
  bottom: calc(100% + 8px);
  left: 0;
  background: var(--color-bg-card);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  padding: 10px 14px;
  z-index: 20;
  min-width: 180px;
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
