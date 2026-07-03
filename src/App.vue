<template>
  <main class="app-shell">
    <ModuleCard
      eyebrow="OCEAN / iOceans"
      title="Controlled Evolution Mockup"
      description="Do not replace iOceans. Do not sell another product. Secure, order and integrate."
    />

    <nav class="nav">
      <RouterLink to="/">
        Entry
      </RouterLink>
      <RouterLink to="/evidence">
        Evidence
      </RouterLink>
      <RouterLink to="/internal-tools">
        Internal Tools
      </RouterLink>
      <RouterLink to="/opportunities">
        Opportunities
      </RouterLink>
      <RouterLink to="/ai-governance">
        Governed AI
      </RouterLink>
      <RouterLink to="/logs">
        Logs
      </RouterLink>
      <RouterLink to="/budget">
        Budget
      </RouterLink>
    </nav>

    <RouterView />
  </main>
</template>

<script setup lang="ts">
import ModuleCard from './components/ModuleCard.vue'
</script>

