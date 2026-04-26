<script setup lang="ts">
import type { Photo } from '../types'

const props = defineProps<{ photos: Photo[] }>()
const preview = props.photos.slice(0, 9)
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">Fotky</h2>
      <a href="#fotky" class="see-all">Zobrazit vše</a>
    </div>
    <div class="grid">
      <a v-for="(photo, i) in preview" :key="i" href="#fotky" class="thumb-link">
        <img :src="photo.src" :alt="photo.caption ?? ''" class="thumb" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: var(--color-bg-card);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  padding: var(--spacing-card);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.card-title { font-size: 20px; font-weight: 700; }
.see-all { font-size: var(--font-size-sm); color: var(--color-primary); }

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
}

.thumb-link {
  display: block;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 4px;
}

.thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.15s;
}

.thumb-link:hover .thumb { opacity: 0.85; }
</style>
