<template>
  <section class="budget-screen">
    <header class="dashboard-header">
      <p class="eyebrow">
        Phased Budget
      </p>
      <h1>Budget Phase View</h1>
      <p>
        Executive decision frame for Phase 0, Phase 1, the initial package and
        the complete phased programme. The programme is presented as a controlled
        framework, not a blank cheque.
      </p>
    </header>

    <div class="budget-grid">
      <article
        v-for="phase in budgetPhases"
        :key="phase.id"
        class="budget-card"
      >
        <div>
          <p class="summary-label">
            {{ phase.label }}
          </p>
          <h2>{{ phase.amount }}</h2>
          <p>{{ phase.meaning }}</p>
        </div>

        <dl class="budget-meta">
          <div>
            <dt>Status</dt>
            <dd>{{ phase.status }}</dd>
          </div>
          <div>
            <dt>VAT</dt>
            <dd>{{ phase.vat }}</dd>
          </div>
          <div>
            <dt>Decision</dt>
            <dd>{{ phase.decision }}</dd>
          </div>
        </dl>
      </article>
    </div>

    <div class="control-grid">
      <article class="control-panel">
        <h2>Scope control</h2>
        <ul class="audit-checklist">
          <li
            v-for="item in scopeRules"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </article>

      <article class="control-panel">
        <h2>Executive reading</h2>
        <p>
          Phase 0 validates interest and operational fit. Phase 1 hardens the
          initial controlled system. The complete programme only makes sense
          after evidence, adoption and decision checkpoints.
        </p>
      </article>

      <article class="control-panel">
        <h2>Acceptance signal</h2>
        <p>
          The buyer should understand in one screen what is being approved, what
          remains out of scope and why each phase has a controlled decision gate.
        </p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const budgetPhases = [
  {
    id: 'DEMO_BUDGET_PHASE_0',
    label: 'Phase 0',
    amount: '15.000 € + VAT',
    meaning: 'Controlled discovery, validation and mockup alignment.',
    status: 'requires_decision',
    vat: 'not included',
    decision: 'approve discovery'
  },
  {
    id: 'DEMO_BUDGET_PHASE_1',
    label: 'Phase 1',
    amount: '32.000 € + VAT',
    meaning: 'Initial operational build after validated interest.',
    status: 'requires_decision',
    vat: 'not included',
    decision: 'approve initial build'
  },
  {
    id: 'DEMO_BUDGET_PHASE_0_1',
    label: 'Initial package',
    amount: '47.000 € + VAT',
    meaning: 'Phase 0 plus Phase 1 as a controlled starting package.',
    status: 'requires_decision',
    vat: 'not included',
    decision: 'approve initial package'
  },
  {
    id: 'DEMO_BUDGET_PROGRAM',
    label: 'Complete programme',
    amount: '150.000 € + VAT',
    meaning: 'Phased framework after adoption signals, not a blank cheque.',
    status: 'requires_decision',
    vat: 'not included',
    decision: 'approve by checkpoints'
  }
]

const scopeRules = [
  'No production commitment in this mockup',
  'No real iOceans integration in this phase',
  'No external APIs',
  'No real scientific data',
  'No credentials',
  'No raw internal tool exports',
  'Every phase has a decision gate'
]
</script>
