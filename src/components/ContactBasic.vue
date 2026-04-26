<script setup lang="ts">
import type { ContactInfo } from '../types'

defineProps<{ contact?: ContactInfo }>()
</script>

<template>
  <div v-if="contact" class="section">
    <h3 class="section-title">Kontaktní informace</h3>
    <ul class="info-list">
      <li v-if="contact.birthday">
        <span class="icon">🎂</span>
        <span>Datum narození: <strong>{{ contact.birthday }}</strong></span>
      </li>
      <li v-if="contact.email">
        <span class="icon">✉️</span>
        <span>{{ contact.email }}</span>
      </li>
      <li v-if="contact.phone">
        <span class="icon">📞</span>
        <span>{{ contact.phone }}</span>
      </li>
      <li v-for="website in contact.websites" :key="website">
        <span class="icon">🔗</span>
        <span>{{ website }}</span>
      </li>
      <li v-if="contact.languages?.length">
        <span class="icon">💬</span>
        <span>Jazyky: {{ contact.languages.join(', ') }}</span>
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
.info-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.info-list li { display: flex; gap: 10px; align-items: flex-start; font-size: var(--font-size-base); }
.icon { font-size: 18px; flex-shrink: 0; }
</style>
