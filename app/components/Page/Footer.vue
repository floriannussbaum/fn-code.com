<template>
  <footer class="bg-surface-secondary text-font-midd pt-12 pb-6 text-sm">
    <div class="page-container page-space space-y-6">
      <p
        v-html="
          $t('content.footer.text', [
            `<strong><a href='https://code.visualstudio.com/' class='hover:text-bw' rel='noopener noreferrer' target='_blank'>Visual Studio Code</a></strong>`,
            `<strong><a href='https://vuejs.org/' class='hover:text-bw' rel='noopener noreferrer' target='_blank'>Vue</a></strong>`,
            `<strong><a href='https://nuxt.com/' class='hover:text-bw' rel='noopener noreferrer' target='_blank'>Nuxt</a></strong>`,
            `<strong><a href='https://tailwindcss.com/' class='hover:text-bw' rel='noopener noreferrer' target='_blank'>Tailwind</a></strong>`,
            `<strong><a href='https://gwfh.mranftl.com/fonts/noto-sans?subsets=latin' class='hover:text-bw' rel='noopener noreferrer' target='_blank'>Noto Sans</a></strong>`,
          ])
        "
      />

      <hr class="border-button" />

      <div class="flex justify-between">
        <span>© {{ new Date().getFullYear() }} Florian Nußbaum</span>
        <div class="flex gap-6">
          <NuxtLink
            :to="localePath('/impressum')"
            class="hover:text-bw underline"
          >
            {{ $t('menu.legalNotice') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/datenschutz')"
            class="hover:text-bw underline"
          >
            {{ $t('menu.privacyPolicy') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
