<script setup lang="ts">
import type { Intro, Profile } from '../types'

defineProps<{ intro: Intro; profile: Profile }>()
</script>

<template>
  <div class="card">
    <h2 class="card-title">Představení</h2>
    <p v-if="profile.bio" class="bio">{{ profile.bio }}</p>

    <ul class="info-list">
      <li v-if="intro.job">
        <span class="icon">💼</span>
        <span>Pracuje v <strong>{{ intro.job.company }}</strong> jako {{ intro.job.title }}</span>
      </li>
      <li v-for="school in intro.education" :key="school">
        <span class="icon">🎓</span>
        <span>Studoval/a na <strong>{{ school }}</strong></span>
      </li>
      <li v-if="intro.livesIn">
        <span class="icon">🏠</span>
        <span>Bydlí v <strong>{{ intro.livesIn }}</strong></span>
      </li>
      <li v-if="intro.from">
        <span class="icon">📍</span>
        <span>Pochází z <strong>{{ intro.from }}</strong></span>
      </li>
      <li v-if="intro.relationship">
        <span class="icon">❤️</span>
        <span>{{ intro.relationship }}</span>
      </li>
      <li v-if="profile.joinedDate">
        <span class="icon">📅</span>
        <span>Na Facebooku od <strong>{{ profile.joinedDate }}</strong></span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.card {
  background: var(--color-bg-card);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  padding: var(--spacing-card);
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
}

.bio {
  font-size: var(--font-size-base);
  text-align: center;
  margin-bottom: 16px;
}

.info-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: var(--font-size-base);
  line-height: 1.4;
}

.icon {
  flex-shrink: 0;
  font-size: 18px;
}
</style>
