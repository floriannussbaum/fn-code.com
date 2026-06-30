<template>
  <button
    type="button"
    aria-live="polite"
    :aria-label="$t('ariaLabel.nav.action.darkMode')"
    :aria-pressed="isLight ? 'false' : 'true'"
    class="page-header-button"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
    @click="toggleColorMode()"
  >
    <component :is="icon" class="h-full w-auto" />
  </button>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
import {
  MoonIcon as MoonIconSolid,
  SunIcon as SunIconSolid,
} from '@heroicons/vue/24/solid'
import type { FunctionalComponent } from 'vue'

const toggleColorMode = inject('toggleColorMode', () => {})
const isLight = useState('isLight')

const isHover = ref<boolean>(false)
const icon = computed<FunctionalComponent>(() => {
  if (isLight.value) {
    return isHover.value ? MoonIconSolid : MoonIcon
  } else {
    return isHover.value ? SunIconSolid : SunIcon
  }
})
</script>
