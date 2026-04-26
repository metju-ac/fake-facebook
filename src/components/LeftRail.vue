<script setup lang="ts">
import type { Intro, Profile, Photo, Friend } from '../types'
import IntroCard from './IntroCard.vue'
import PhotosTeaser from './PhotosTeaser.vue'
import FriendsTeaser from './FriendsTeaser.vue'

defineProps<{
  intro: Intro
  profile: Profile
  photos: Photo[]
  friends: Friend[]
}>()
</script>

<template>
  <aside class="left-rail">
    <IntroCard :intro="intro" :profile="profile" />
    <PhotosTeaser :photos="photos" />
    <FriendsTeaser :friends="friends" />
  </aside>
</template>

<style scoped>
.left-rail {
  width: var(--layout-left-rail);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--layout-gap);
}
</style>
