<script setup lang="ts">
import type { Photo } from '../types'
import { useLightbox } from '../composables/useLightbox'

const props = defineProps<{ photos: Photo[] }>()
const { openLightbox } = useLightbox()
</script>

<template>
  <section id="fotky" class="card">
    <h2 class="section-title">Fotky</h2>
    <div v-if="photos.length" class="grid">
      <div
        v-for="(photo, i) in photos"
        :key="i"
        class="photo-tile"
        @click="openLightbox(props.photos, i)"
      >
        <img :src="photo.src" :alt="photo.caption ?? ''" class="thumb" />
        <div v-if="photo.caption || photo.location" class="photo-meta">
          <span v-if="photo.caption" class="caption">{{ photo.caption }}</span>
          <span v-if="photo.location" class="location">📍 {{ photo.location }}</span>
        </div>
      </div>
    </div>
    <div v-else class="empty">Žádné fotky</div>
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
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.photo-tile {
  cursor: zoom-in;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}
.thumb {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  background: var(--color-action-secondary);
  transition: opacity 0.15s;
}
.photo-tile:hover .thumb { opacity: 0.85; }
.photo-meta {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.6));
  padding: 16px 8px 6px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.caption, .location {
  color: white;
  font-size: var(--font-size-xs);
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}
.empty { color: var(--color-text-secondary); text-align: center; padding: 24px; }
</style>
