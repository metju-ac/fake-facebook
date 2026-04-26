import { ref } from 'vue'
import type { Photo } from '../types'

const currentLightbox = ref<{ photos: Photo[]; index: number } | null>(null)

export function useLightbox() {
  function openLightbox(photos: Photo[], index: number) {
    currentLightbox.value = { photos, index }
    document.body.style.overflow = 'hidden'
  }

  function closeLightbox() {
    currentLightbox.value = null
    document.body.style.overflow = ''
  }

  function goNext() {
    if (!currentLightbox.value) return
    const next = currentLightbox.value.index + 1
    if (next < currentLightbox.value.photos.length) {
      currentLightbox.value = { ...currentLightbox.value, index: next }
    }
  }

  function goPrev() {
    if (!currentLightbox.value) return
    const prev = currentLightbox.value.index - 1
    if (prev >= 0) {
      currentLightbox.value = { ...currentLightbox.value, index: prev }
    }
  }

  return { currentLightbox, openLightbox, closeLightbox, goNext, goPrev }
}
