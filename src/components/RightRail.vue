<script setup lang="ts">
import type { Post, About, Photo } from '../types'
import PostsSection from './PostsSection.vue'
import AboutSection from './AboutSection.vue'
import PhotosSection from './PhotosSection.vue'

defineProps<{
  posts: Post[]
  about: About
  photos: Photo[]
}>()
</script>

<template>
  <div class="right-rail">
    <PostsSection :posts="posts" />
    <AboutSection :about="about" />
    <PhotosSection :photos="photos" />
  </div>
</template>

<style scoped>
.right-rail {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--layout-gap);
  min-width: 0;
}
</style>
