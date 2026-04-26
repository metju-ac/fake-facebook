<script setup lang="ts">
import type { Friend } from '../types'

defineProps<{ friends: Friend[] }>()
</script>

<template>
  <section id="pratele" class="card">
    <h2 class="section-title">Přátelé · {{ friends.length }}</h2>
    <div v-if="friends.length" class="grid">
      <div v-for="(friend, i) in friends" :key="i" class="friend-tile">
        <img :src="friend.photo" :alt="friend.name" class="thumb" />
        <div class="friend-name">{{ friend.name }}</div>
        <div v-if="friend.mutualCount" class="mutual">{{ friend.mutualCount }} společných přátel</div>
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
.friend-tile { display: flex; flex-direction: column; gap: 4px; }
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
</style>
