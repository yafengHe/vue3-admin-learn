<script setup>
import Counter from "@/components/Counter/index.vue"
</script>

<template>
  <router-link to="/home">首页</router-link>
  <router-link to="/about">关于</router-link>
  <router-view></router-view>
  <Counter></Counter>
</template>

<style scoped></style>
