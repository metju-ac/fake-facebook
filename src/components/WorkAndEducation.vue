<script setup lang="ts">
import type { WorkEntry, EducationEntry } from '../types'

defineProps<{ workHistory: WorkEntry[]; education: EducationEntry[] }>()
</script>

<template>
  <div class="section">
    <h3 class="section-title">Práce a vzdělání</h3>

    <template v-if="workHistory.length">
      <h4 class="sub-title">Zaměstnání</h4>
      <ul class="entry-list">
        <li v-for="(entry, i) in workHistory" :key="i" class="entry">
          <div class="entry-icon">💼</div>
          <div>
            <div class="entry-primary">
              {{ entry.title }} ve firmě <strong>{{ entry.company }}</strong>
            </div>
            <div class="entry-secondary">
              {{ entry.from }}{{ entry.to ? ` – ${entry.to}` : ' – současnost' }}
            </div>
            <div v-if="entry.description" class="entry-desc">{{ entry.description }}</div>
          </div>
        </li>
      </ul>
    </template>

    <template v-if="education.length">
      <h4 class="sub-title">Vzdělání</h4>
      <ul class="entry-list">
        <li v-for="(entry, i) in education" :key="i" class="entry">
          <div class="entry-icon">🎓</div>
          <div>
            <div class="entry-primary"><strong>{{ entry.school }}</strong></div>
            <div v-if="entry.field" class="entry-secondary">{{ entry.field }}</div>
            <div class="entry-secondary">
              {{ entry.from }}{{ entry.to ? ` – ${entry.to}` : '' }}
            </div>
          </div>
        </li>
      </ul>
    </template>
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
.sub-title {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 12px 0 8px;
}
.entry-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
.entry { display: flex; gap: 12px; align-items: flex-start; }
.entry-icon { font-size: 20px; flex-shrink: 0; }
.entry-primary { font-size: var(--font-size-base); }
.entry-secondary { font-size: var(--font-size-sm); color: var(--color-text-secondary); }
.entry-desc { font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: 2px; }
</style>
