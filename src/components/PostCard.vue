<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Post, Photo } from '../types'
import { useLightbox } from '../composables/useLightbox'

const props = defineProps<{ post: Post }>()
const { openLightbox } = useLightbox()

const SEE_MORE_THRESHOLD = 300

const isLong = computed(() =>
  props.post.type !== 'life-event' &&
  'text' in props.post &&
  typeof props.post.text === 'string' &&
  props.post.text.length > SEE_MORE_THRESHOLD
)

const expanded = ref(false)

const displayText = computed(() => {
  if (props.post.type === 'life-event') return undefined
  const text = 'text' in props.post ? props.post.text : undefined
  if (!text) return undefined
  if (!isLong.value || expanded.value) return text
  return text.slice(0, SEE_MORE_THRESHOLD) + '…'
})

function handlePhotoClick() {
  if (props.post.type !== 'photo') return
  const photo: Photo = { src: props.post.image, caption: props.post.text }
  openLightbox([photo], 0)
}
</script>

<template>
  <article class="post-card">
    <div class="post-header">
      <div class="avatar-placeholder" />
      <div class="meta">
        <div class="post-author">Matěj Klíma</div>
        <div class="post-date">{{ post.date }}</div>
      </div>
    </div>

    <!-- Life-event -->
    <template v-if="post.type === 'life-event'">
      <div class="life-event-body">
        <div class="life-event-icon">⭐</div>
        <div>
          <div class="life-event-title">{{ post.event }}</div>
          <div v-if="post.description" class="life-event-desc">{{ post.description }}</div>
        </div>
      </div>
      <img v-if="post.image" :src="post.image" :alt="post.event" class="post-image" />
    </template>

    <!-- Checkin -->
    <template v-else-if="post.type === 'checkin'">
      <p v-if="displayText" class="post-text">
        {{ displayText }}
        <button v-if="isLong" class="see-more-btn" @click="expanded = !expanded">
          {{ expanded ? 'Zobrazit méně' : 'Zobrazit více' }}
        </button>
      </p>
      <div class="checkin-place">
        <span class="checkin-icon">📍</span>
        <span>{{ post.place }}</span>
      </div>
      <img v-if="post.image" :src="post.image" :alt="post.place" class="post-image" />
    </template>

    <!-- Text -->
    <template v-else-if="post.type === 'text'">
      <p class="post-text">
        {{ displayText }}
        <button v-if="isLong" class="see-more-btn" @click="expanded = !expanded">
          {{ expanded ? 'Zobrazit méně' : 'Zobrazit více' }}
        </button>
      </p>
    </template>

    <!-- Photo -->
    <template v-else-if="post.type === 'photo'">
      <p v-if="displayText" class="post-text">
        {{ displayText }}
        <button v-if="isLong" class="see-more-btn" @click="expanded = !expanded">
          {{ expanded ? 'Zobrazit méně' : 'Zobrazit více' }}
        </button>
      </p>
      <img
        :src="post.image"
        :alt="post.text ?? 'Fotka'"
        class="post-image clickable"
        @click="handlePhotoClick"
      />
    </template>

    <!-- Footer -->
    <div
      v-if="post.type !== 'life-event' && (post.likes || post.comments)"
      class="post-footer"
    >
      <span v-if="post.likes" class="reaction">👍 {{ post.likes }}</span>
      <span v-if="post.comments" class="reaction">💬 {{ post.comments }} komentářů</span>
    </div>
  </article>
</template>

<style scoped>
.post-card {
  background: var(--color-bg-card);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  overflow: hidden;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px var(--spacing-card) 8px;
}

.avatar-placeholder {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-action-secondary);
  flex-shrink: 0;
}

.meta { display: flex; flex-direction: column; }
.post-author { font-weight: var(--font-weight-semibold); font-size: var(--font-size-base); }
.post-date { font-size: var(--font-size-xs); color: var(--color-text-secondary); }

.post-text {
  padding: 0 var(--spacing-card) 12px;
  line-height: 1.5;
  white-space: pre-wrap;
}

.see-more-btn {
  background: none;
  border: none;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  padding: 0;
  margin-left: 4px;
}
.see-more-btn:hover { text-decoration: underline; }

.post-image {
  width: 100%;
  display: block;
}
.post-image.clickable { cursor: zoom-in; }

.checkin-place {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px var(--spacing-card);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  font-size: var(--font-size-sm);
}

.life-event-body {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px var(--spacing-card) 12px;
  background: var(--color-bg-page);
  margin: 0 var(--spacing-card) 8px;
  border-radius: var(--radius-card);
  border: 1px solid var(--color-divider);
}

.life-event-icon { font-size: 28px; }
.life-event-title { font-weight: var(--font-weight-semibold); font-size: var(--font-size-base); }
.life-event-desc { font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: 2px; }

.post-footer {
  display: flex;
  gap: 16px;
  padding: 10px var(--spacing-card);
  border-top: 1px solid var(--color-divider);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}
</style>
