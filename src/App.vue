<script setup lang="ts">
import { RouterView } from 'vue-router'
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <header class="mx-12 my-4"><h1 class="text-2xl">Profie Generator</h1></header>
  <RouterView class="mx-4" />
</template>

<style scoped></style>
