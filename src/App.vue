<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/Nav-Bar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="">
    <NavBar />
    <RouterView />
    <Footer />

  </div>
</template>

<style scoped></style>
