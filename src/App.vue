<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/Nav-Bar.vue';
import FooterNav from './components/Footer-Nav.vue';
</script>

<template>
  <div class="">
    <NavBar />
    <RouterView />
    <FooterNav />
  </div>
</template>

<style scoped></style>
