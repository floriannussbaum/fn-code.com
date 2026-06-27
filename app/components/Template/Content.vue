<template>
  <div>
    <ElementH3 v-if="title">{{ title }}</ElementH3>
    <p
      v-if="$slots.default"
      class="font-400 text-font-secondary leading-7"
      v-bind="$attrs"
    >
      <slot />
    </p>
    <TemplateBadgeGroup v-if="$slots.badges">
      <slot name="badges" />
    </TemplateBadgeGroup>
    <div v-if="$slots.actions" class="mt-6 flex gap-2">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: undefined,
  },
)

defineOptions({
  inheritAttrs: false,
})
</script>
