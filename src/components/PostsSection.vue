<script setup lang="ts">
import type { Post } from '../types'
import PostCard from './PostCard.vue'

defineProps<{ posts: Post[] }>()
</script>

<template>
  <section id="prispevky" class="posts-section">
    <template v-if="posts.length">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </template>
    <div v-else class="empty">Žádné příspěvky</div>
  </section>
</template>

<style scoped>
.posts-section {
  display: flex;
  flex-direction: column;
  gap: var(--layout-gap);
}

.empty {
  background: var(--color-bg-card);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  padding: 32px;
  text-align: center;
  color: var(--color-text-secondary);
}
</style>
