<template>
  <nav
    v-show="isActive"
    id="mobile-drawer"
    :aria-label="$t('ariaLabel.nav.drawer')"
    :aria-hidden="!isActive"
    class="bg-surface-high fixed top-0 left-0 z-1000 flex h-full w-full items-center justify-center"
    :style="{
      transition: `clip-path ${duration}ms cubic-bezier(0.785, 0.135, 0.15, 0.86)`,
      clipPath: isOpen ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
    }"
    @click="emit('close')"
  >
    <ul
      class="text-font-sec font-500 h-vh flex flex-col items-center justify-center space-y-4 text-5xl"
      :style="{
        transition: `transform ${duration}ms cubic-bezier(0.785, 0.135, 0.15, 0.86)`,
        transform: isOpen ? 'translateY(0%)' : 'translateY(-100vh)',
      }"
    >
      <li
        v-for="(item, i) in menuItems"
        :key="i"
        class="relative overflow-hidden"
      >
        <NuxtLink
          :to="item.link"
          class="text-align-center block translate-y-full cursor-pointer px-4 py-2"
          :class="[activeSection === item.name && 'text-font-primary']"
          :style="{
            transition: `transform 0.4s ${isOpen ? 300 + i * 80 : duration}ms cubic-bezier(0.785, 0.135, 0.15, 0.86)`,
            transform: isOpen ? 'translateY(0%)' : 'translateY(100%)',
          }"
        >
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { MenuItem } from '~/composables/useNavigation'

const props = defineProps<{
  event?: MouseEvent
  menuItems: MenuItem[]
  activeSection?: string
}>()

const isActive = ref<boolean>(false)
const isOpen = ref<boolean>(false)
const duration = <number>400

watch(
  () => props.event,
  (val: MouseEvent | undefined) => {
    toggleMenu()
  },
)

function toggleMenu() {
  // Wait for drawer to ensure that the animation can be played
  isActive.value = true
  setTimeout(() => {
    isOpen.value = !isOpen.value
    window.document.body.style.overflowY = isOpen.value ? 'hidden' : 'auto'
  }, 50)

  // Cleanup
  // Set the nav to hidden after the closing animation
  const timeoutId = setTimeout(() => {
    isActive.value = false
  }, duration + 50)
  if (!isOpen.value) clearTimeout(timeoutId)
}

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>
