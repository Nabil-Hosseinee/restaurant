<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <div class="app">
    <Header />
    <RouterView class="router-view"/>
  </div>
</template>

<style>
.app {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

Header {
  flex: 0.10 0.10 auto;
}

.router-view {
  flex: 0.90;
  overflow-y: auto;
}
</style>