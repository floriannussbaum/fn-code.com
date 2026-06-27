<template>
  <ul class="text-font-primary mt-2 flex flex-wrap gap-x-1 gap-y-2">
    <li v-for="(node, index) in renderedItems" :key="index">
      <component :is="node" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useSlots, computed, Fragment } from 'vue'

const slots = useSlots()

const renderedItems = computed(() => {
  const slotContent = slots.default ? slots.default() : []
  return slotContent.flatMap((node) => {
    if (node.type === Fragment) {
      return node.children
    }
    return node
  })
})
</script>
