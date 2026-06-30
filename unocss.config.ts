import { defineConfig, presetTypography, presetUno } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      bw: 'light-dark(black, white)',
      wb: 'light-dark(white, black)',

      surface: {
        primary: 'light-dark(#f3f3f6, #242933)', // ~ gray-100
        secondary: 'light-dark(#ffffff, #1a1d23)', // white
        high: 'light-dark(#e5e5e5, #2a2f38)', // neutral-200
      },

      font: {
        primary: 'light-dark(#242a3a, #f3f3f6)', // gray-100
        test: 'light-dark(#3a4052, #9ca3af)',
        midd: 'light-dark(#4b5563, #9ca3af)', // light #525252
        sec: 'light-dark(#6b6e7f, #6b7280)',
        secondary: '#7a7d8c', // dark #6b7280
      },

      button: {
        DEFAULT: 'light-dark(#e4e5ea, #2b313d)',
        hover: '#747fe0',
        secondary: 'light-dark(#374151, #6b7280)', // ~ gray-700
      },

      nav: {
        primary: 'light-dark(rgb(245 245 245 / 0.7), rgb(31 36 44 / 0.7))', // neutral-100/70
        secondary: 'light-dark(#d4d4d4, #404040)', // neutral-300 - neutral-700
      },

      icon: {
        DEFAULT: 'light-dark(#9b9fad, #6b7280)', // ~ gray-500
        hover: 'light-dark(#b5b9ca, #9ca3af)',
      },
    },
  },

  preflights: [
    {
      getCSS: () => `
        :root {
          color-scheme: light dark;
        }
        .dark {
          color-scheme: dark;
        }
        .light {
          color-scheme: light;
        }
      `,
    },
  ],

  shortcuts: {
    'page-container': 'max-w-7xl mx-auto',
    'page-space': 'px-4 lg:px-8',
    'section-box': 'space-y-12 py-20',
    'half-container': 'max-w-160',
    'page-header-button': 'p-2.4 hover:bg-button inline-flex h-10 rounded-full',
  },

  presets: [
    presetUno(),
    presetTypography({
      cssExtend: (theme: any) => ({
        'h1, h2, h3, h4, strong': {
          color: theme.colors?.font?.primary,
        },
        'li::marker': {
          color: theme.colors?.font?.midd,
        },
        'p, ul': {
          color: theme.colors?.font?.secondary,
        },
        h2: {
          'font-weight': '600',
        },
        a: {
          color: theme.colors?.bw,
        },
        hr: {
          border: `1px solid ${theme.colors?.button?.DEFAULT}`,
        },
      }),
    }),
  ],
})
