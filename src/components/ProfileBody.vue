<script setup lang="ts">
import type { ProfileConfig } from '../types'
import LeftRail from './LeftRail.vue'
import RightRail from './RightRail.vue'

defineProps<{ config: ProfileConfig }>()
</script>

<template>
  <div class="profile-body">
    <LeftRail
      :intro="config.intro"
      :profile="config.profile"
      :photos="config.photos"
      :friends="config.friends"
    />
    <RightRail
      :posts="config.posts"
      :about="config.about"
      :friends="config.friends"
      :photos="config.photos"
    />
  </div>
</template>

<style scoped>
.profile-body {
  display: flex;
  gap: var(--layout-gap);
  align-items: flex-start;
  padding: 0 16px var(--layout-gap);
}
</style>
