<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useLightbox } from '../composables/useLightbox'

const { currentLightbox, closeLightbox, goNext, goPrev } = useLightbox()

const current = computed(() =>
  currentLightbox.value
    ? currentLightbox.value.photos[currentLightbox.value.index]
    : null
)

const hasPrev = computed(() =>
  currentLightbox.value !== null && currentLightbox.value.index > 0
)
const hasNext = computed(() =>
  currentLightbox.value !== null &&
  currentLightbox.value.index < currentLightbox.value.photos.length - 1
)

function onKeydown(e: KeyboardEvent) {
  if (!currentLightbox.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') goNext()
  if (e.key === 'ArrowLeft') goPrev()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <div v-if="currentLightbox" class="overlay" @click.self="closeLightbox">
      <button class="close-btn" @click="closeLightbox" aria-label="Zavřít">✕</button>

      <button v-if="hasPrev" class="nav-btn nav-prev" @click="goPrev" aria-label="Předchozí">‹</button>

      <div class="lightbox-content">
        <img
          v-if="current"
          :src="current.src"
          :alt="current.caption ?? ''"
          class="lightbox-img"
        />
        <div v-if="current && (current.caption || current.location || current.date)" class="lightbox-meta">
          <span v-if="current.caption" class="lightbox-caption">{{ current.caption }}</span>
          <span v-if="current.location" class="lightbox-location">📍 {{ current.location }}</span>
          <span v-if="current.date" class="lightbox-date">{{ current.date }}</span>
        </div>
      </div>

      <button v-if="hasNext" class="nav-btn nav-next" @click="goNext" aria-label="Další">›</button>
    </div>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: var(--color-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255,255,255,0.15);
  border: none;
  color: white;
  font-size: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}
.close-btn:hover { background: rgba(255,255,255,0.25); }

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.15);
  border: none;
  color: white;
  font-size: 40px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}
.nav-btn:hover { background: rgba(255,255,255,0.25); }
.nav-prev { left: 16px; }
.nav-next { right: 16px; }

.lightbox-content {
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.lightbox-img {
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 6px;
}

.lightbox-meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.lightbox-caption { color: white; font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); text-align: center; }
.lightbox-location, .lightbox-date { color: rgba(255,255,255,0.75); font-size: var(--font-size-sm); }
</style>
