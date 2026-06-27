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
          isLight ? 'dark' : 'light',
        ]"
      />
    </div>

    <div
      v-show="isActive"
      ref="sweep"
      aria-hidden="true"
      class="pointer-events-none fixed top-0 left-0 z-[9999] h-[140px] w-full translate-y-[-140px] shadow-lg"
      :style="{
        transition: `transform ${duration}ms cubic-bezier(0.76,0,0.24,1)`,
        transform: isAnimate
          ? 'translateY(calc(100vh + 140px))'
          : 'translateY(-140px)',
      }"
    />

    <!-- Main layer -->
    <div
      ref="mainLayer"
      :class="['bg-surface-secondary', isLight ? 'light' : 'dark']"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, provide } from 'vue'

const snapshotLayer = ref<HTMLElement | null>(null)
const snapshot = ref<HTMLElement | null>(null)
const mainLayer = ref<HTMLElement | null>(null)

const { y: scrollY } = useWindowScroll()
const isActive = ref<boolean>(false)
const isAnimate = ref(false)
const isLight = useState<boolean>('isLight', () => true)
const duration = <number>1200 // 1200

watch(scrollY, (val: number) => {
  if (isActive.value) snapshotLayer.value?.scrollTo(0, val)
})

function addClone(): void {
  if (mainLayer.value && snapshot.value)
    snapshot.value.innerHTML = mainLayer.value.innerHTML
}

function removeClone(): void {
  if (snapshot.value) snapshot.value.replaceChildren()
}

async function toggleColorMode(): Promise<void> {
  if (isActive.value || !snapshotLayer.value) return
  addClone()
  isActive.value = true
  isLight.value = !isLight.value

  await nextTick()
  isAnimate.value = true

  snapshotLayer.value.scrollTo(0, scrollY.value)

  // Cleanup
  setTimeout(() => {
    isActive.value = false
    isAnimate.value = false
    removeClone()
  }, duration + 50)
}

provide('toggleColorMode', toggleColorMode)
</script>
