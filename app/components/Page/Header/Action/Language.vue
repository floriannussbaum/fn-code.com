<template>
  <a
    :href="switchLocalePath($t('lang.invert') as 'en' | 'de')"
    :hreflang="$t('lang.invert')"
    rel="alternate"
    :aria-label="$t('ariaLabel.nav.action.language')"
    class="page-header-button"
    @click.prevent="action('toggleLanguage')"
  >
    <LanguageIcon class="h-full w-auto" />
  </a>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { LanguageIcon } from '@heroicons/vue/24/outline'
import type { ActionType } from '~/components/ActionTransition.vue'

const switchLocalePath = useSwitchLocalePath()
const action = inject<(type: ActionType) => void>('action', () => {})
</script>
