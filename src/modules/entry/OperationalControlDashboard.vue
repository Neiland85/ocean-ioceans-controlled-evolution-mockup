<template>
  <section class="operational-dashboard">
    <header class="dashboard-header">
      <p class="eyebrow">
        Single Entry / Operational Control
      </p>
      <h1>Operational Control Dashboard</h1>
      <p>
        Synthetic overview of the controlled iOceans evolution mockup: entries,
        roles, states, audit logs, governed AI and phased budget.
      </p>
    </header>

    <div
      class="summary-grid"
      aria-label="Operational summary"
    >
      <article
        v-for="item in summaryCards"
        :key="item.label"
        class="summary-card"
      >
        <p class="summary-label">
          {{ item.label }}
        </p>
        <strong>{{ item.value }}</strong>
        <span>{{ item.hint }}</span>
      </article>
    </div>

    <div class="control-grid">
      <article class="control-panel">
        <h2>Core flow</h2>
        <ol>
          <li>Single web entry receives synthetic records.</li>
          <li>Format and classification are validated.</li>
          <li>Review status and risk flags become visible.</li>
          <li>Every relevant action produces an audit reference.</li>
          <li>Only reviewed outputs become exportable.</li>
        </ol>
      </article>

      <article class="control-panel">
        <h2>Current demo states</h2>
        <ul class="state-list">
          <li
            v-for="state in visibleStates"
            :key="state"
          >
            {{ state }}
          </li>
        </ul>
      </article>

      <article class="control-panel">
        <h2>Decision frame</h2>
        <p>
          Block 1 is presented as the first contracted block: 45,000 EUR + VAT across seven uneven phases. Block 2 remains deferred, not contracted now.
        </p>
        <ul>
          <li>Phase 0: 7.500 € + VAT paid start gate</li>
          <li>Block 1: 45.000 € + VAT across seven uneven phases</li>
          <li>Block 2: 105.000 € + VAT deferred reference</li>
          <li>Programme framework: 150.000 € + VAT</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const summaryCards = [
  {
    label: 'Synthetic users',
    value: '1',
    hint: 'Role-based access starts visible'
  },
  {
    label: 'Installations',
    value: '1',
    hint: 'Demo installation under analysis'
  },
  {
    label: 'Evidence assets',
    value: '1',
    hint: 'Reviewed synthetic evidence'
  },
  {
    label: 'Audit logs',
    value: '1',
    hint: 'Traceable demo action'
  },
  {
    label: 'AI actions',
    value: '1',
    hint: 'Human approval required'
  },
  {
    label: 'Budget phases',
    value: '7 + 1',
    hint: 'Seven Block 1 phases plus deferred Block 2'
  }
]

const visibleStates = [
  'received',
  'validating_format',
  'pending_review',
  'approved',
  'in_analysis',
  'reviewed',
  'exportable',
  'requires_decision'
]
</script>
