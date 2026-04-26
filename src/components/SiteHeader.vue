<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <header class="site-header">
    <div class="inner">
      <div class="logo" aria-label="Facebook">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#1877F2"/>
          <path d="M27 13h-3.5c-1.1 0-1.5.5-1.5 1.5V17h5l-.7 5H22v13h-5V22h-4v-5h4v-3.5C17 9.6 19.4 7 23.5 7 25.4 7 27 7.2 27 7.2V13z" fill="white"/>
        </svg>
      </div>
      <div class="search-box" aria-hidden="true">
        <span class="search-icon">🔍</span>
        <input type="text" placeholder="Hledat na Facebooku" readonly tabindex="-1" />
      </div>
      <div class="profile-pill">
        <span class="profile-name">{{ name }}</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-bg-card);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: var(--nav-height);
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 16px;
  max-width: var(--layout-max-width);
  margin: 0 auto;
}

.logo { flex-shrink: 0; }

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--color-bg-page);
  border-radius: 9999px;
  padding: 8px 16px;
  width: 240px;
}

.search-box input {
  border: none;
  background: transparent;
  outline: none;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  width: 100%;
  cursor: default;
}

.search-icon { font-size: 14px; }

.profile-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--color-action-secondary);
  border-radius: 9999px;
  padding: 6px 12px;
}

.profile-name {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
}
</style>
