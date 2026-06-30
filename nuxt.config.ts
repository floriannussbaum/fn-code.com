export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@vueuse/nuxt'],

  compatibilityDate: '2026-06-27',

  ssr: true, // SSG
  nitro: {
    preset: 'static',
    hooks: {
      'prerender:generate': (route: any) => {
        if (
          route.fileName?.endsWith('.html') &&
          typeof route.contents === 'string'
        ) {
          const comment =
            '<!--\n' +
            '    _______________________   \n' +
            '   |                       \\  \n' +
            '  ||      ______           |\\ \n' +
            '  ||     |  ____|          || \n' +
            '  ||     | |__  _ __       || \n' +
            `  ||     |  __|| '_ \\      || \n` +
            '  ||     | |   | | | |     || \n' +
            '  ||     |_|   |_| |_|     || \n' +
            '  ||                       || \n' +
            '  ||_______________________|| \n' +
            '  \\                         | \n' +
            '   \\_______________________/  \n' +
            '                              \n' +
            `  It seems like you're interested in my code?\n` +
            '  Head over to my GitHub profile for some more: https://github.com/floriannussbaum\n' +
            '-->\n'
          route.contents = route.contents.replace(
            '<!DOCTYPE html>',
            `${comment}<!DOCTYPE html>`,
          )
        }
      },
    },
  },

  vite: {
    optimizeDeps: {
      include: [
        '@heroicons/vue/20/solid',
        '@heroicons/vue/24/outline',
        '@heroicons/vue/24/solid',
      ],
    },
  },

  app: {
    baseURL: '/',
    head: {
      link: [
        // Favicons
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }, // Modern
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, // Fallback
        { rel: 'alternate icon', type: 'image/png', href: '/favicon.png' }, // 256×256 Fallback
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        }, // iOS

        // Manifest
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  devtools: { enabled: false }, // Disable for production

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,

      // Default meta
      meta: {
        title: 'Florian Nußbaum',
      },
    },
  },

  unocss: {
    preflight: true,
    // uno: false,
    // wind: true,
    typography: true,
  },

  typescript: {
    shim: false,
  },
})
