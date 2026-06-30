<template>
  <h2 class="text-font-primary text-6xl uppercase">
    <span v-if="title" class="font-200 text-size-5xl block">{{ title }}</span>
    <span v-if="subtitle" class="font-800 block">{{ subtitle }}</span>
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
}>()
</script>
