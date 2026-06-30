import type { RouterConfig } from '@nuxt/schema'

function langPath(path: string): string {
  return path.startsWith('/en') ? '/en' : '/'
}

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // No scroll if the user navigates to a different language
    if (langPath(from.path) !== langPath(to.path)) return false

    // Default behavior
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0, behavior: 'smooth' }
  },
}
