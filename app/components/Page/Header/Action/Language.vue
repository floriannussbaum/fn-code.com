<template>
  <a
    :href="switchLocalePath($t('lang.invert') as 'en' | 'de')"
    :hreflang="$t('lang.invert')"
    rel="alternate"
    :aria-label="$t('ariaLabel.nav.action.language')"
    class="page-header-button"
    @click.prevent="toggleLanguage()"
  >
    <LanguageIcon class="h-full w-auto" />
  </a>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { LanguageIcon } from '@heroicons/vue/24/outline'

const switchLocalePath = useSwitchLocalePath()
const toggleLanguage = inject('toggleLanguage', () => {})
</script>
