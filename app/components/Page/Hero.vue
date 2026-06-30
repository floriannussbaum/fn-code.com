<template>
  <section
    id="hero"
    class="bg-icon relative flex h-screen items-center justify-center overflow-hidden"
  >
    <div class="absolute flex h-full w-full">
      <div
        class="h-full w-full"
        :style="{
          backgroundImage: `linear-gradient(var(--default), transparent)`,
        }"
      />
    </div>

    <div class="flex justify-center text-center">
      <h1 class="sr-only">
        Florian Nußbaum – {{ $t('content.about.jobTitle') }}
      </h1>

      <div
        aria-hidden="true"
        class="text-wb font-800 relative inline-flex justify-center overflow-hidden tracking-widest uppercase"
        :class="[
          'text-[1rem] leading-[1rem]',
          'sm:text-[1.8rem] sm:leading-[1.8rem]',
          'lg:text-[3rem] lg:leading-[3rem]',
          'xl:text-[4rem] xl:leading-[4rem]',
        ]"
      >
        <div
          :class="[
            'flex items-center justify-center overflow-hidden',
            'h-28 w-42',
            'sm:h-40 sm:w-68',
            'lg:h-72 lg:w-108',
            'xl:h-96 xl:w-144',
            isAnimate ? (isLight ? 'btn' : 'd-btn') : '',
          ]"
          :style="[
            isAnimateEnd && {
              backgroundSize: '100% 0.2em, 0.2em 0, 100% 0.2em, 0.2em 100%',
            },
          ]"
        >
          <p
            :style="{
              transition: `opacity 0ms 800ms`,
              opacity: isAnimate ? '1' : '0',
            }"
          >
            Florian Nuẞbaum
          </p>
        </div>
        <div
          class="text-bw bg-wb flex items-center justify-center overflow-hidden mix-blend-screen dark:mix-blend-multiply"
          :class="[
            'h-28 w-42 sm:h-40 sm:w-68 lg:h-72 lg:w-108 xl:h-96 xl:w-144',
          ]"
          :style="{
            transition: `transform ${duration}ms cubic-bezier(0.5, 0, 0, 1) ${delay}ms`,
            transform: isAnimate ? 'translateX(0%)' : 'translateX(-200%)',
          }"
        >
          <p
            lang="en"
            class="font-900"
            :style="{
              transition: `transform ${duration}ms cubic-bezier(0.5, 0, 0, 1) ${delay}ms`,
              transform: isAnimate ? 'translateX(0%)' : 'translateX(200%)',
            }"
          >
            {{ $t('content.about.jobTitle') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLight = useState('isLight')

const duration = <number>2000
const delay = <number>100
const isAnimate = ref(false)
const isAnimateEnd = ref(false)

onMounted(() => {
  isAnimate.value = true
  setTimeout(
    () => {
      isAnimateEnd.value = true
    },
    duration + delay + 50,
  )
})
</script>

<style scoped>
.d-btn {
  background-repeat: no-repeat;
  background-image:
    linear-gradient(90deg, #000 100%, #000 0),
    linear-gradient(180deg, #000 100%, #000 0),
    linear-gradient(90deg, #000 100%, #000 0),
    linear-gradient(180deg, #000 100%, #000 0);
  background-size:
    0 0,
    0 0,
    0 0,
    0 0;
  background-position:
    0 0,
    100% 0,
    100% 100%,
    0 100%;
  animation: bg 2s linear 1.6s forwards;
}

.btn {
  background-repeat: no-repeat;
  background-image:
    linear-gradient(90deg, #fff 100%, #fff 0),
    linear-gradient(180deg, #fff 100%, #fff 0),
    linear-gradient(90deg, #fff 100%, #fff 0),
    linear-gradient(180deg, #fff 100%, #fff 0);
  background-size:
    0 0,
    0 0,
    0 0,
    0 0;
  background-position:
    0 0,
    100% 0,
    100% 100%,
    0 100%;
  animation: bg 2s linear 1.6s forwards;
}
@keyframes bg {
  0% {
    background-size:
      0 0.2em,
      0.2em 0,
      0 0.2em,
      0.2em 0;
  }
  15% {
    background-size:
      0 0.2em,
      0.2em 0,
      100% 0.2em,
      0.2em 0;
  }
  25% {
    background-size:
      0 0.2em,
      0.2em 0,
      100% 0.2em,
      0.2em 100%;
  }
  30% {
    background-size:
      25% 0.2em,
      0.2em 0,
      100% 0.2em,
      0.2em 100%;
  }
  50% {
    background-size:
      65% 0.2em,
      0.2em 0,
      100% 0.2em,
      0.2em 100%;
  }
  70% {
    background-size:
      90% 0.2em,
      0.2em 0,
      100% 0.2em,
      0.2em 100%;
  }
  100% {
    background-size:
      100% 0.2em,
      0.2em 0,
      100% 0.2em,
      0.2em 100%;
  }
}
</style>
