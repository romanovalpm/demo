<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
    min-height: 10vh;
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 20px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .06);
}
</style>
