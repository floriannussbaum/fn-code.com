<template>
  <div
    ref="sequenceRef"
    class="sticky top-0 left-0 h-[513px] max-w-[400px] overflow-hidden"
  >
    <img
      src="~/assets/images/backflip-sequence.jpg"
      alt="A sequence of a backflip, showing a person performing a backflip in 30 steps."
      class="absolute top-0 left-0 h-[513px] w-[12000px] max-w-none"
      :style="{
        transform: `translateX(-${motionState.translateX}px)`,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

interface ElementStats {
  top: number
  bottom: number
  distance: number
}

interface MotionState {
  steps: number
  offset: number
  translateX: number
}

const { height: windowHeight } = useWindowSize()
const { y: scrollY } = useWindowScroll()
const sequenceRef = ref<HTMLElement | null>(null)

const elementStats = ref<ElementStats>({
  top: 0,
  bottom: 0,
  distance: 0,
})
const motionState = ref<MotionState>({
  steps: 29, // 30 steps, but we start counting from 0
  offset: 52,
  translateX: 0,
})

// Save element stats on mounted
onMounted(() => {
  if (!sequenceRef.value) return
  const offset = motionState.value.offset
  const top = sequenceRef.value.offsetTop
  const height = sequenceRef.value.getBoundingClientRect().height
  const distance = windowHeight.value - height
  elementStats.value = {
    top: top - offset,
    distance: distance - offset,
    bottom: top - distance,
  }
})

// Calculate current step and translateX on scroll
watch(scrollY, (val: number) => {
  const element = elementStats.value
  const motion = motionState.value
  if (val < element.bottom || val > element.top) return
  const ScrollPercent = Math.round(
    ((val - element.bottom) * 100) / element.distance,
  )
  const step = Math.round((ScrollPercent * motion.steps) / 100)
  const stepRange = 11600 / motion.steps
  motion.translateX = step * stepRange
})
</script>
