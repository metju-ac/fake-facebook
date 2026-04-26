<script setup lang="ts">
import type { Friend } from '../types'

const props = defineProps<{ friends: Friend[] }>()
const preview = props.friends.slice(0, 9)
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">Přátelé</h2>
      <a href="#pratele" class="see-all">Zobrazit vše</a>
    </div>
    <div class="grid">
      <a v-for="(friend, i) in preview" :key="i" href="#pratele" class="friend-tile">
        <img :src="friend.photo" :alt="friend.name" class="thumb" />
        <span class="friend-name">{{ friend.name.split(' ')[0] }}</span>
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
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-decoration: none;
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
</style>
