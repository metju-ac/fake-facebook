<script setup lang="ts">
import type { Profile } from '../types'

defineProps<{ profile: Profile }>()
</script>

<template>
  <div class="profile-header">
    <div
      class="cover"
      :style="{ backgroundImage: `url(${profile.coverImage})` }"
      role="img"
      :aria-label="`Fotka na pozadí — ${profile.name}`"
    />

    <div class="profile-row-wrapper">
      <div class="profile-row">
        <div class="pic-wrapper">
          <img
            class="profile-pic"
            :src="profile.profileImage"
            :alt="profile.name"
          />
        </div>

        <div class="identity">
          <h1 class="name">{{ profile.name }}</h1>
          <p v-if="profile.followers" class="followers">
            {{ profile.followers.toLocaleString('cs-CZ') }} sledujících
          </p>
          <p v-if="profile.bio" class="bio">{{ profile.bio }}</p>
        </div>

        <div class="actions">
          <button class="btn btn-primary" disabled>✓ Přátelé</button>
          <button class="btn btn-secondary" disabled>✉ Napsat zprávu</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-header {
  background: var(--color-bg-card);
}

.cover {
  height: var(--cover-height);
  background-size: cover;
  background-position: center top;
  background-color: var(--color-action-secondary);
  border-radius: 0 0 var(--radius-card) var(--radius-card);
}

.profile-row-wrapper {
  max-width: var(--layout-max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.profile-row {
  display: flex;
  align-items: flex-end;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-divider);
}

.pic-wrapper {
  margin-top: calc(var(--profile-pic-size) * -0.33);
  flex-shrink: 0;
}

.profile-pic {
  width: var(--profile-pic-size);
  height: var(--profile-pic-size);
  border-radius: 50%;
  border: 4px solid var(--color-bg-card);
  object-fit: cover;
  background-color: var(--color-action-secondary);
}

.identity {
  flex: 1;
  padding-bottom: 4px;
}

.name {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
}

.followers {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-top: 2px;
}

.bio {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-top: 4px;
}

.actions {
  display: flex;
  gap: 8px;
  padding-bottom: 4px;
}

.btn {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  border: none;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}

.btn-secondary {
  background: var(--color-action-secondary);
  color: var(--color-text-primary);
}
</style>
