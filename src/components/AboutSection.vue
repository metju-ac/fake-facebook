<script setup lang="ts">
import type { About } from '../types'
import AboutOverview from './AboutOverview.vue'
import WorkAndEducation from './WorkAndEducation.vue'
import PlacesLived from './PlacesLived.vue'
import ContactBasic from './ContactBasic.vue'
import LifeEvents from './LifeEvents.vue'

defineProps<{ about: About }>()
</script>

<template>
  <section id="informace" class="about-card">
    <AboutOverview :overview="about.overview" />
    <WorkAndEducation :work-history="about.workHistory" :education="about.education" />
    <PlacesLived :places="about.placesLived" />
    <ContactBasic :contact="about.contact" />
    <LifeEvents :events="about.lifeEvents" />
  </section>
</template>

<style scoped>
.about-card {
  background: var(--color-bg-card);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  padding: var(--spacing-card);
}
</style>
