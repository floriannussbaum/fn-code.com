<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import './assets/main.css'

const { t, locale } = useI18n()

useHead({
  htmlAttrs: {
    class: 'h-full bg-white text-[--default]',
    lang: () => locale.value,
  },
  bodyAttrs: {
    class: 'h-full',
  },

  // Meta title template
  titleTemplate: (titleChunk) => {
    const brandName = 'Florian Nußbaum'
    return titleChunk
      ? `${titleChunk} | ${brandName}`
      : `${brandName} – ${t('content.about.jobTitle')}`
  },

  // Noscript message
  noscript: [
    {
      innerHTML: `<div class="bg-red-400 p-4 flex justify-center flex-col text-center space-y-4">
        <p>
          <strong>Please enable your JavaScript for the full experience.</strong>
          <br />
          Leider funktioniert diese Website ohne <strong>JavaScript</strong> nicht richtig!
        </p>
        <div class="space-x-4">
          <a href="/impressum" class="link !text-[--default]">Impressum</a>
          <a href="/datenschutz" class="link !text-[--default]">Datenschutz</a>
        </div>
      </div>`,
    },
  ],
})
</script>

<style>
#__nuxt {
  height: 100%;
}
html {
  scroll-behavior: smooth;
}
</style>
