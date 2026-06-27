<template>
  <footer class="bg-surface-secondary text-font-midd pt-12 pb-6 text-sm">
    <div class="page-container page-space space-y-6">
      <p>
        Coded in
        <strong>
          <a href="https://code.visualstudio.com/" class="hover:text-bw">
            Visual Studio Code
          </a>
        </strong>
        by yours truly. Built with
        <strong>
          <a href="https://vuejs.org/" class="hover:text-bw">Vue.js</a>
        </strong>
        +
        <strong>
          <a href="https://nuxt.com/" class="hover:text-bw">Nuxt</a>
        </strong>
        and
        <strong>
          <a href="https://tailwindcss.com/" class="hover:text-bw">
            Tailwind CSS</a
          ></strong
        >. All text is set in the
        <strong>
          <a
            href="https://gwfh.mranftl.com/fonts/noto-sans?subsets=latin"
            class="hover:text-bw"
          >
            Noto Sans
          </a>
        </strong>
        typeface.
      </p>

      <hr class="border-button" />

      <div class="flex justify-between">
        <span>© {{ new Date().getFullYear() }} Florian Nußbaum</span>
        <div class="flex gap-6">
          <NuxtLink to="/impressum" class="hover:text-bw underline">
            Impressum
          </NuxtLink>
          <NuxtLink to="/datenschutz" class="hover:text-bw underline">
            Datenschutz
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
