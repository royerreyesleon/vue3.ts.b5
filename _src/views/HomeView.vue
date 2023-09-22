<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />

  <div class="container mt-5 mb-5">
    <RouterView />
  </div>

  <!-- <main>
    <TheWelcome />
  </main> -->
</template>
