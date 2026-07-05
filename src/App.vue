<template>
  <div class="app-shell">
    <header class="app-header">
      <div>
        <p class="app-eyebrow">OCEAN / iOceans Controlled Mockup</p>
        <h1>Operational Evidence Preview</h1>
      </div>

      <nav class="nav" aria-label="Demo navigation">
        <RouterLink to="/">
          Overview
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
          AI Governance
        </RouterLink>
        <RouterLink to="/logs">
          Logs
        </RouterLink>
        <RouterLink to="/budget">
          Budget
        </RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
