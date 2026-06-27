<template>
  <NuxtLayout>
    <div
      class="bg-surface-primary flex min-h-[calc(100vh-52px)] items-center justify-center pb-[52px]"
    >
      <div
        class="flex flex-col items-center justify-center px-4 text-center sm:flex-row"
      >
        <h1
          class="text-font-primary sm:border-button text-2xl font-extrabold tracking-tight sm:mr-6 sm:border-r sm:pr-6 sm:text-3xl"
        >
          {{ error?.statusCode ?? 404 }}
        </h1>
        <h2 class="text-font-secondary mt-2 sm:mt-0">
          Ups! Diese Seite konnte leider nicht gefunden werden.
          <!-- This page could not be found. -->
        </h2>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

useHead({
  title: 'Fehler | Florian Nußbaum',
})

useSeoMeta({
  robots: 'noindex, nofollow',
  description:
    'Entschuldigung, die angeforderte Seite konnte nicht gefunden werden.',
})

definePageMeta({
  layout: 'default',
  name: 'Error',
})
</script>
