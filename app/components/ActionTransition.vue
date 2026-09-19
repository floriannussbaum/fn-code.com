<template>
  <div>
    <!-- Snapshot layer -->
    <div
      v-show="isActive"
      ref="snapshotLayer"
      aria-hidden="true"
      class="pointer-events-none fixed inset-0 z-[9998] touch-none overflow-hidden"
      :style="{
        transition: `clip-path ${duration}ms cubic-bezier(0.76,0,0.24,1)`,
        clipPath: isAnimate ? 'inset(100% 0 0 0)' : 'inset(0 0 0 0)',
      }"
    >
      <div
        ref="snapshot"
        :class="[
          'bg-surface-secondary absolute top-0 left-0 w-full max-w-none will-change-transform',
          toggleLight(isLanguage ? isLight : !isLight),
        ]"
      />
    </div>

    <div
      v-show="isActive"
      ref="sweep"
      aria-hidden="true"
      class="pointer-events-none fixed top-0 left-0 z-[9999] w-full shadow-lg"
      :style="{
        height: `${sweepSize}px`,
        transition: `transform ${duration}ms cubic-bezier(0.76,0,0.24,1)`,
        transform: isAnimate
          ? `translateY(calc(100vh + ${sweepSize}px))`
          : `translateY(-${sweepSize}px)`,
      }"
    />

    <!-- Main layer -->
    <div
      ref="mainLayer"
      :class="['bg-surface-secondary', toggleLight(isLight)]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, provide } from 'vue'

export type ActionType = 'toggleColorMode' | 'toggleLanguage'

const { setLocale, locale } = useI18n()
const { y: scrollY } = useWindowScroll()

const snapshotLayer = ref<HTMLElement | null>(null)
const snapshot = ref<HTMLElement | null>(null)
const mainLayer = ref<HTMLElement | null>(null)

const isActive = ref<boolean>(false)
const isAnimate = ref<boolean>(false)
const isLight = useState<boolean>('isLight', () => true)
const isLanguage = ref<boolean>(false)
const duration = <number>1200
const sweepSize = ref<number>(10)

watch(scrollY, (val: number) => {
  if (isActive.value) snapshotLayer.value?.scrollTo(0, val)
})

function toggleLight(isLight: boolean): string {
  return isLight ? 'light' : 'dark'
}

async function viewTransition(
  callback: () => void,
  sweep?: number,
): Promise<void> {
  if (
    isActive.value ||
    !snapshotLayer.value ||
    !mainLayer.value ||
    !snapshot.value
  )
    return
  sweepSize.value = sweep ?? 10
  snapshot.value.innerHTML = mainLayer.value.innerHTML // Clone
  isActive.value = true

  await callback()

  await nextTick()
  isAnimate.value = true

  snapshotLayer.value.scrollTo(0, scrollY.value)

  // Cleanup
  setTimeout(() => {
    isActive.value = false
    isAnimate.value = false
    snapshot.value?.replaceChildren() // Remove clone
  }, duration + 50)
}

function toggleColorMode(): void {
  viewTransition(() => {
    isLight.value = !isLight.value
  }, 140)
}

function toggleLanguage(): void {
  viewTransition(() => {
    isLanguage.value = true // Flag to indicate a language change is in progress
    setLocale(locale.value === 'de' ? 'en' : 'de')
    setTimeout(() => (isLanguage.value = false), duration + 50) // Cleanup
  }, 10)
}

function action(action: ActionType): void {
  if (action === 'toggleColorMode') {
    toggleColorMode()
  } else if (action === 'toggleLanguage') {
    toggleLanguage()
  }
}

provide('action', action)
</script>
