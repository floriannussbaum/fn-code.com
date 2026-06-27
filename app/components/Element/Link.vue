<template>
  <a
    :href
    :rel
    target="_blank"
    class="text-3.4 border-button-secondary text-button-secondary hover:border-font-midd hover:bg-button-hover flex items-center gap-1.5 rounded-sm border px-3 py-1 font-semibold hover:text-white hover:transition hover:duration-200 hover:ease-in"
  >
    <slot />
    <ArrowUpRightIcon class="h-4 w-auto" />
  </a>
</template>

<script setup lang="ts">
import { ArrowUpRightIcon } from '@heroicons/vue/20/solid'

withDefaults(
  defineProps<{
    href: string
    rel?: string
  }>(),
  {
    rel: 'noopener',
  },
)
</script>
