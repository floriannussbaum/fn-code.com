<template>
  <div class="page-space half-container h-180 sm:h-260">
    <video
      ref="videoPlayer"
      class="object-left-center h-full w-full object-contain"
      preload="metadata"
      playsinline
      muted
      loop
      disablePictureInPicture
      poster="~/assets/images/preview.jpg"
      :aria-label="$t('ariaLabel.video')"
    >
      {{ $t('error.video') }}
      <source src="~/assets/videos/florian-nussbaum.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useObserver } from '~/composables/useObserver'

const videoPlayer = ref<HTMLVideoElement | null>(null)
const time = 1.4
const isPlaying = ref<boolean>(false)

function videoPlay(sekunden: number): void {
  if (!videoPlayer.value) return
  isPlaying.value = true
  videoPlayer.value.currentTime = sekunden
  videoPlayer.value.play()
}

function videoStop(sekunden: number): void {
  if (!videoPlayer.value) return
  isPlaying.value = false
  videoPlayer.value.currentTime = sekunden
  videoPlayer.value.pause()
}

useObserver(
  videoPlayer,
  ([entry]) => {
    if (entry?.isIntersecting && !isPlaying.value) videoPlay(time)
  },
  { rootMargin: '0px 0px -50% 0px', threshold: 0 },
)

useObserver(
  videoPlayer,
  ([entry]) => {
    if (!entry?.isIntersecting && isPlaying.value) videoStop(time)
  },
  { rootMargin: '0px 0px -5% 0px', threshold: 0 },
)
</script>
