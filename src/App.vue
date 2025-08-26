<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/Nav-Bar.vue';
import FooterNav from './components/Footer-Nav.vue';
</script>

<template>
  <NavBar />
  <RouterView />
  <FooterNav />
</template>

<style scoped></style>
