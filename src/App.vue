<script setup>
import HomePage from "./components/pages/HomePage.vue"
import WebHeadear from "./components/header/WebHeadear.vue";
import WebFooter from "./components/footer/WebFooter.vue";
</script>

<template>
  <div>
    <WebHeadear/>
    <RouterView/>
    <WebFooter/>
  </div>
</template>

