<script setup lang="ts">
defineProps<{ overview?: string }>()
</script>

<template>
  <div v-if="overview" class="section">
    <h3 class="section-title">Přehled</h3>
    <p class="overview-text">{{ overview }}</p>
  </div>
</template>

<style scoped>
.section { margin-bottom: 24px; }
.section-title {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-divider);
}
.overview-text { font-size: var(--font-size-base); line-height: 1.5; }
</style>
