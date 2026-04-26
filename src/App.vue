<script setup lang="ts">
import { config } from './config/index'
import SiteHeader from './components/SiteHeader.vue'
import ProfileHeader from './components/ProfileHeader.vue'
import SectionNav from './components/SectionNav.vue'
</script>

<template>
  <SiteHeader :name="config.profile.name" />
  <div class="page-wrapper">
    <ProfileHeader :profile="config.profile" />
    <SectionNav />
  </div>
</template>

<style>
.page-wrapper {
  max-width: var(--layout-max-width);
  margin: 0 auto;
}
</style>
