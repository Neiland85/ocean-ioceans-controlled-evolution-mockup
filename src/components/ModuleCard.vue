<template>
  <article class="module-card">
    <p class="eyebrow">
      {{ eyebrow }}
    </p>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
}>()
</script>

