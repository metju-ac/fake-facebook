<script setup lang="ts">
</script>

<template>
  <nav class="section-nav">
    <div class="inner">
      <a href="#prispevky" class="nav-link">Příspěvky</a>
      <a href="#informace" class="nav-link">Informace</a>
      <a href="#pratele" class="nav-link">Přátelé</a>
      <a href="#fotky" class="nav-link">Fotky</a>
    </div>
  </nav>
</template>

<style scoped>
.section-nav {
  background: var(--color-bg-card);
  border-top: 1px solid var(--color-divider);
  box-shadow: var(--shadow-card);
  margin-bottom: 16px;
}

.inner {
  display: flex;
  max-width: var(--layout-max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.nav-link {
  display: block;
  padding: 16px 16px 14px;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  border-bottom: 3px solid transparent;
  text-decoration: none;
  transition: color 0.1s, border-color 0.1s;
}

.nav-link:hover {
  color: var(--color-primary);
  background: var(--color-bg-page);
  border-radius: var(--radius-card) var(--radius-card) 0 0;
  text-decoration: none;
}
</style>
