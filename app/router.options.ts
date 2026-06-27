import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (
      (from.path === '/' && to.path === '/en') ||
      (from.path === '/en' && to.path === '/')
    ) {
      return false
    }

    // Standardverhalten
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0, behavior: 'smooth' }
  },
}
