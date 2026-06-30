import { useIntersectionObserver } from '@vueuse/core'

export interface MenuItem {
  name: string
  title: string
  link: string
}

export const useNavigation = () => {
  const activeSection = useState<MenuItem['name'] | ''>(
    'activeSection',
    () => 'about',
  )
  const route = useRoute()
  const { t } = useI18n()
  const localePath = useLocalePath()

  watch(
    () => route.path,
    (newPath) => {
      if (newPath !== '/') {
        activeSection.value = ''
      } else {
        activeSection.value = 'about'
      }
    },
    { immediate: true },
  )

  const menuItems = computed<MenuItem[]>(() => [
    {
      name: 'about',
      title: t('menu.about'),
      link: localePath('/#about'),
    },
    {
      name: 'projects',
      title: t('menu.projects'),
      link: localePath('/#projects'),
    },
    {
      name: 'balance',
      title: t('menu.balance'),
      link: localePath('/#balance'),
    },
    {
      name: 'contact',
      title: t('menu.contact'),
      link: localePath('/#contact'),
    },
  ])

  const order = menuItems.value.map((item) => item.name)
  const visibleSections = ref<Set<string>>(new Set())

  function observeSection(el: HTMLElement | null, id: string) {
    if (!el) return

    useIntersectionObserver(
      el,
      ([entry]) => {
        if (entry?.isIntersecting) {
          visibleSections.value.add(id)
        } else {
          visibleSections.value.delete(id)
        }

        // Determining the correct section based on the order
        if (visibleSections.value.size > 0) {
          // Change Set to Array
          const currentVisible = Array.from(visibleSections.value)

          // Find the section with the highest index in the ‘order’ array
          const absoluteActive = currentVisible.reduce((highest, current) => {
            return order.indexOf(current) > order.indexOf(highest)
              ? current
              : highest
          })

          if (activeSection.value !== absoluteActive) {
            activeSection.value = absoluteActive
          }
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-10% 0px -40% 0px',
      },
    )
  }

  return {
    activeSection,
    observeSection,
    menuItems,
  }
}
