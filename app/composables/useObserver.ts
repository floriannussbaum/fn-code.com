import { onBeforeUnmount, watch } from 'vue'
import type { Ref } from 'vue'

export function useObserver(
  target: Ref<HTMLElement | null>,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
) {
  let observer: IntersectionObserver | null = null

  watch(
    target,
    (el, _, onCleanup) => {
      if (!el) return

      observer = new IntersectionObserver(callback, options)
      observer.observe(el)

      onCleanup(() => observer?.disconnect())
    },
    { immediate: true },
  )

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}
