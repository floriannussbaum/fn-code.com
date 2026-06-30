<template>
  <header
    class="text-font-midd border-nav-secondary bg-nav-primary sticky top-0 z-50 mx-auto border-b"
  >
    <div
      class="page-container flex items-center justify-between backdrop-blur lg:px-4"
    >
      <!-- desktop menu -->
      <nav :aria-label="$t('ariaLabel.nav.desktop')" class="hidden sm:block">
        <ul class="flex text-sm">
          <li v-for="(item, i) in menuItems" :key="i">
            <NuxtLink
              :to="item.link"
              :class="[
                'hover:text-bw block p-4',
                activeSection === item.name && 'text-bw',
              ]"
              :aria-current="
                activeSection === item.name ? 'location' : undefined
              "
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- mobile menu -->
      <div class="mx-1.4 my-1 block sm:hidden">
        <button
          id="burger-menu"
          type="button"
          class="page-header-button !p-1.8 !h-11"
          :aria-label="$t('ariaLabel.nav.mobile')"
          aria-controls="mobile-drawer"
          :aria-expanded="clickEvent ? true : false"
          @click="clickEvent = $event"
        >
          <Bars3Icon class="h-full w-auto" />
        </button>
      </div>

      <!-- actions buttons -->
      <div class="mx-1.4 my-1">
        <PageHeaderActionLanguage />
        <PageHeaderActionDarkMode />
      </div>
    </div>

    <!-- Mobile Drawer -->
    <PageHeaderDrawer
      :event="clickEvent"
      @close="clickEvent = undefined"
      :menuItems
      :activeSection
    />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNavigation } from '~/composables/useNavigation'
import { Bars3Icon } from '@heroicons/vue/24/outline'

const { activeSection, menuItems } = useNavigation()

const clickEvent = ref<MouseEvent | undefined>(undefined)
</script>
