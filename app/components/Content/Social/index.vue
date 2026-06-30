<template>
  <ul
    class="text-icon flex w-full flex-wrap gap-x-12 gap-y-4 sm:justify-start sm:gap-x-16 sm:pr-10"
  >
    <li class="w-full sm:order-last sm:w-auto">
      <a
        :aria-label="$t('ariaLabel.eMail')"
        href="mailto:florian@fn-code.com"
        rel="noopener"
        class="hover:text-icon-hover inline-flex items-center gap-2 py-1 whitespace-nowrap"
      >
        <EnvelopeIcon aria-hidden="true" class="h-6 w-auto" />
        florian@fn-code.com
      </a>
    </li>
    <li>
      <a
        :aria-label="$t('ariaLabel.gitHub')"
        href="https://github.com/floriannussbaum/"
        rel="noopener"
        target="_blank"
        class="group hover:text-icon-hover inline-flex items-center gap-2 py-1 whitespace-nowrap"
      >
        <ContentSocialIconGithub
          aria-hidden="true"
          class="group-hover:fill-icon-hover fill-icon -m-0.5 h-7 w-auto"
        />
        GitHub
      </a>
    </li>
    <li>
      <a
        :aria-label="$t('ariaLabel.linkedIn')"
        href="https://www.linkedin.com/in/floriannussbaum/"
        rel="noopener"
        target="_blank"
        class="group hover:text-icon-hover inline-flex items-center gap-2 py-1 whitespace-nowrap"
      >
        <ContentSocialIconLinkedin
          aria-hidden="true"
          class="group-hover:fill-icon-hover fill-icon -m-0.5 h-7 w-auto"
        />
        LinkedIn
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/solid'
</script>
