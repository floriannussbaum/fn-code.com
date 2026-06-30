<template>
  <div class="min-h-screen lg:grid lg:grid-cols-2">
    <!-- LEFT -->
    <section id="about" class="bg-surface-primary lg:col-start-1 lg:row-span-2">
      <div
        class="page-space section-box half-container lg:sticky lg:top-12 lg:ml-auto"
        :ref="(el) => observeSection(el as HTMLElement | null, 'about')"
      >
        <ElementH2 title="Florian" subtitle="Nuẞbaum" />
        <ContentSocial />
        <TemplateContent title="About">
          <span
            v-html="
              t('content.about.text', [
                `<strong lang='en'>${t('content.about.jobTitle')}</strong>`,
              ])
            "
          />
        </TemplateContent>
        <TemplateContent title="Skills" class="uppercase">
          <span lang="en">Frontend & Mobile</span>
          <template #badges>
            <ElementBadge>HTML</ElementBadge>
            <ElementBadge>CSS</ElementBadge>
            <ElementBadge>JavaScript</ElementBadge>
            <ElementBadge>TypeScript</ElementBadge>
            <ElementBadge>Vue</ElementBadge>
            <ElementBadge>Nuxt</ElementBadge>
            <ElementBadge>React</ElementBadge>
            <ElementBadge>Angular</ElementBadge>
            <ElementBadge>Tailwind</ElementBadge>
            <ElementBadge>Ionic</ElementBadge>
            <ElementBadge>Capacitor</ElementBadge>
          </template>
        </TemplateContent>
        <TemplateContent class="uppercase">
          <span lang="en">Backend & Services</span>
          <template #badges>
            <ElementBadge>PHP</ElementBadge>
            <ElementBadge>SQL</ElementBadge>
            <ElementBadge>Firebase</ElementBadge>
            <ElementBadge>Docker</ElementBadge>
          </template>
        </TemplateContent>
        <TemplateContent class="uppercase">
          <span lang="en">Tooling, Testing & Workflow</span>
          <template #badges>
            <ElementBadge>Git</ElementBadge>
            <ElementBadge>Bitbucket</ElementBadge>
            <ElementBadge>Jira</ElementBadge>
            <ElementBadge>Confluence</ElementBadge>
            <ElementBadge>Playwright</ElementBadge>
            <ElementBadge>VS Code</ElementBadge>
            <ElementBadge>Linux</ElementBadge>
            <ElementBadge>Figma</ElementBadge>
            <ElementBadge>Xcode</ElementBadge>
            <ElementBadge>Android Studio</ElementBadge>
          </template>
        </TemplateContent>
      </div>
    </section>

    <!-- RIGHT -->
    <section
      id="projects"
      class="bg-surface-secondary lg:mt-94vh lg:col-start-2 lg:scroll-mt-12"
    >
      <div
        class="page-space section-box half-container lg:mr-auto"
        :ref="(el) => observeSection(el as HTMLElement | null, 'projects')"
      >
        <ElementH2 title="Personal" subtitle="Projects" lang="en" />
        <ul class="space-y-12">
          <li>
            <TemplateContent title="Team Escalate">
              {{ t('content.projects.team-escalate') }}
              <template #badges>
                <ElementBadge>TypeScript</ElementBadge>
                <ElementBadge>Vue</ElementBadge>
                <ElementBadge>Nuxt</ElementBadge>
                <ElementBadge>HTML</ElementBadge>
                <ElementBadge>CSS</ElementBadge>
                <ElementBadge>Tailwind</ElementBadge>
              </template>
              <template #actions>
                <ElementLink href="https://team-escalate.de/">
                  Live Page
                </ElementLink>
                <ElementLink
                  href="https://github.com/floriannussbaum/team-escalate"
                >
                  View Source
                </ElementLink>
              </template>
            </TemplateContent>
          </li>
          <li>
            <TemplateContent title="Bitcoin Dashboard">
              {{ t('content.projects.btc-dashboard') }}
              <template #badges>
                <ElementBadge>Angular</ElementBadge>
                <ElementBadge>JavaScript</ElementBadge>
                <ElementBadge>HTML</ElementBadge>
                <ElementBadge>CSS</ElementBadge>
              </template>
              <template #actions>
                <ElementLink
                  href="https://btc-dashboard.fn-code.com/"
                  rel="noopener nofollow"
                >
                  Live Demo
                </ElementLink>
                <ElementLink
                  href="https://github.com/floriannussbaum/btc-dashboard"
                >
                  View Source
                </ElementLink>
              </template>
            </TemplateContent>
          </li>
          <!-- <li>
            <TemplateContent title="Sound of Code">
              {{ t('content.projects.sound-of-code') }}
              <template #badges>
                <ElementBadge>JavaScript</ElementBadge>
                <ElementBadge>HTML</ElementBadge>
                <ElementBadge>CSS</ElementBadge>
              </template>
              <template #actions>
                <ElementLink href="#" rel="noopener nofollow">Live Demo</ElementLink>
                <ElementLink href="#">View Source</ElementLink>
              </template>
            </TemplateContent>
          </li> -->
          <li>
            <TemplateContent title="Frendies UG">
              {{ t('content.projects.frendies-ug') }}
              <template #badges>
                <ElementBadge>PHP</ElementBadge>
                <ElementBadge>JavaScript</ElementBadge>
                <ElementBadge>WebGL</ElementBadge>
                <ElementBadge>HTML</ElementBadge>
                <ElementBadge>CSS</ElementBadge>
              </template>
              <template #actions>
                <ElementLink
                  href="https://dose.fn-code.com/"
                  rel="noopener nofollow"
                >
                  Live Demo
                </ElementLink>
                <ElementLink href="https://github.com/floriannussbaum/dose">
                  View Source
                </ElementLink>
              </template>
            </TemplateContent>
          </li>
        </ul>
      </div>
    </section>

    <section
      id="balance"
      class="bg-surface-primary lg:bg-surface-secondary lg:col-start-2 lg:scroll-mt-12"
    >
      <div
        class="page-space section-box half-container lg:mr-auto"
        :ref="(el) => observeSection(el as HTMLElement | null, 'balance')"
      >
        <ElementH2 title="Leisure" subtitle="Balance" lang="en" />
        <TemplateContent>
          {{ t('content.balance.text') }}
        </TemplateContent>
        <ContentStepImg />
      </div>
    </section>
  </div>

  <section id="contact" class="bg-surface-high text-font-primary">
    <div
      class="page-container section-box items-center lg:grid lg:grid-cols-2 lg:space-y-0"
      :ref="(el) => observeSection(el as HTMLElement | null, 'contact')"
    >
      <div class="page-space half-container space-y-12 lg:order-last">
        <ElementH2 title="It's me" subtitle="Say Hello" lang="en" />
        <ContentSocial />
      </div>
      <ContentPortraitVideo />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useNavigation } from '~/composables/useNavigation'

const route = useRoute()
const { t } = useI18n()
const { observeSection } = useNavigation()

useSeoMeta({
  // Title is define on app.vue by default
  description: t('seo.home.description'),
  ogTitle: t('seo.home.ogTitle'),
  ogDescription: t('seo.home.ogDescription'),
  ogType: 'website',
  ogUrl: useRuntimeConfig().public.siteUrl + route.path,
})

definePageMeta({
  layout: 'custom',
  name: 'home',
})
</script>
