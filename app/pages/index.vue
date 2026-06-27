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
          Hi. Ich bin ein
          <strong>Frontend Developer</strong> mit Fokus auf TypeScript und
          moderne Webtechnologien wie Vue und React. Ich entwickle skalierbare
          Frontends, generische UI-Komponenten und performante Webanwendungen —
          von Headless-CMS-Projekten bis hin zu PWAs und Hybrid-Apps. Dabei lege
          ich Wert auf sauberen, wartbaren Code und eine enge Zusammenarbeit mit
          Design-, Produkt- und Backend-Teams.
        </TemplateContent>
        <TemplateContent title="Skills" class="uppercase">
          Frontend & Mobile
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
          Backend & Services
          <template #badges>
            <ElementBadge>PHP</ElementBadge>
            <ElementBadge>SQL</ElementBadge>
            <ElementBadge>Firebase</ElementBadge>
            <ElementBadge>Docker</ElementBadge>
          </template>
        </TemplateContent>
        <TemplateContent class="uppercase">
          Tooling, Testing & Workflow
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
        <ElementH2 title="Personal" subtitle="Projects" />
        <ul class="space-y-12">
          <li>
            <TemplateContent title="Team Escalate">
              Ein echtes Herzensprojekt von mir, das ich seit 2013 betreue. Team
              Escalate ist ein Sportverein für Parkour, Freerunning und Tricking
              in Halle (Saale). Ich habe die Website von Grund auf neu gestaltet
              und entwickelt, um sie moderner, benutzerfreundlicher und
              ansprechender zu gestalten.
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
              Ein persönliches Dashboard zur Echtzeit-Analyse von
              Bitcoin-Marktdaten über verschiedene APIs. Das Projekt wurde zum
              Großteil mittels KI entwickelt, um in diesem Bereich mehr
              praktische Erfahrung zu sammeln. Das Tool visualisiert wichtige
              Kennzahlen wie die Marktkapitalisierung und berechnet den
              Portfolio-Wert dynamisch aus einer JSON-Transaktionsdatei.
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
              Ein experimentelles Projekt, das ich entwickelt habe, um die
              Möglichkeit zu erkunden, Code in Klang umzuwandeln. Es nutzt die
              Web Audio API, um Code-Snippets in Echtzeit in Klang zu
              übersetzen.
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
              Ein code Überbleibsel aus einer damaligen Selbstständigkeit, die
              ich 2014 betrieben habe. Obwohl das Projekt nicht weiterentwickelt
              wird, war es eine wertvolle Erfahrung in der Entwicklung moderner
              Webtechnologien wie WebGL. Es bietet eine interaktive
              3D-Erfahrung, die es Benutzern ermöglicht, mit Elementen zu
              interagieren.
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
        <ElementH2 title="Leisure" subtitle="Balance" />
        <TemplateContent>
          In meiner Freizeit bin ich sportlich aktiv und betreibe
          Parkour/Freerunning, was mir die Möglichkeit bietet, meinen Ausgleich
          zu finden.<br />
          Im Zuge dessen betreue ich seit 2013 verschiedene Projekte und
          Prozesse für Kinder und Jugendliche, um ihnen einen sicheren Raum für
          den Sport zu bieten.
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
        <ElementH2 title="It's me" subtitle="Say Hello" />
        <ContentSocial />
      </div>
      <ContentPortraitVideo />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useNavigation } from '~/composables/useNavigation'

const { observeSection } = useNavigation()

useSeoMeta({
  // Title is define on app.vue by default
  description:
    'Florian Nußbaum ist ein Frontend Developer mit Fokus auf TypeScript und moderne Webtechnologien wie Vue und React.',
  ogTitle: 'Florian Nußbaum',
  ogDescription:
    'Florian Nußbaum ist ein Frontend Developer mit Fokus auf TypeScript und moderne Webtechnologien wie Vue und React.',
  ogType: 'website',
  ogUrl: useRuntimeConfig().public.siteUrl + '/',
})

definePageMeta({
  layout: 'custom',
  name: 'Florian Nußbaum',
})
</script>
