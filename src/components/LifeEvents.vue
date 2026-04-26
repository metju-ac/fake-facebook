<script setup lang="ts">
import type { LifeEvent } from '../types'

defineProps<{ events: LifeEvent[] }>()
</script>

<template>
  <div v-if="events.length" class="section">
    <h3 class="section-title">Životní události</h3>
    <ul class="event-list">
      <li v-for="(event, i) in events" :key="i" class="event">
        <div class="event-dot" />
        <div class="event-body">
          <div class="event-title">{{ event.title }}</div>
          <div class="event-date">{{ event.date }}</div>
          <div v-if="event.description" class="event-desc">{{ event.description }}</div>
          <img v-if="event.image" :src="event.image" :alt="event.title" class="event-image" />
        </div>
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
.event-list { list-style: none; display: flex; flex-direction: column; gap: 16px; }
.event { display: flex; gap: 14px; align-items: flex-start; }
.event-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-primary);
  flex-shrink: 0;
  margin-top: 4px;
}
.event-title { font-weight: var(--font-weight-semibold); font-size: var(--font-size-base); }
.event-date { font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: 2px; }
.event-desc { font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: 4px; }
.event-image { margin-top: 8px; border-radius: var(--radius-card); max-height: 200px; object-fit: cover; width: 100%; }
</style>
