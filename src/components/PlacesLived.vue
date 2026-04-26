<script setup lang="ts">
import type { PlaceEntry } from '../types'

defineProps<{ places: PlaceEntry[] }>()

const labels: Record<PlaceEntry['type'], string> = {
  current: 'Bydlí v',
  hometown: 'Pochází z',
  past: 'Dříve žil/a v',
}
</script>

<template>
  <div v-if="places.length" class="section">
    <h3 class="section-title">Bydliště</h3>
    <ul class="place-list">
      <li v-for="(place, i) in places" :key="i" class="place">
        <span class="icon">📍</span>
        <span><em>{{ labels[place.type] }}</em> <strong>{{ place.city }}</strong></span>
      </li>
    </ul>
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
.place-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.place { display: flex; gap: 10px; align-items: center; font-size: var(--font-size-base); }
.icon { font-size: 18px; }
</style>
