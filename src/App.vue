<script setup lang="ts">
import { config } from './config/index'
import SiteHeader from './components/SiteHeader.vue'
import ProfileHeader from './components/ProfileHeader.vue'
import SectionNav from './components/SectionNav.vue'
import ProfileBody from './components/ProfileBody.vue'
import PhotoLightbox from './components/PhotoLightbox.vue'
</script>

<template>
  <SiteHeader :name="config.profile.name" />
  <div class="page-wrapper">
    <ProfileHeader :profile="config.profile" />
    <SectionNav />
    <ProfileBody :config="config" />
  </div>
  <PhotoLightbox />
</template>

<style>
.page-wrapper {
  max-width: var(--layout-max-width);
  margin: 0 auto;
}
</style>
