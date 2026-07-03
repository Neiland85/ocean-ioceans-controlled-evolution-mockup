<template>
  <section class="budget-screen">
    <header class="dashboard-header">
      <p class="eyebrow">
        Phased Budget
      </p>
      <h1>Budget Phase View</h1>
      <p>
        Executive decision frame backed by synthetic demo fixtures. The complete
        programme is presented as a controlled framework, not a blank cheque.
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
          <h2>{{ amountLabel(phase) }}</h2>
          <p>{{ phase.meaning }}</p>
        </div>

        <dl class="budget-meta">
          <div>
            <dt>Status</dt>
            <dd>{{ phase.status }}</dd>
          </div>
          <div>
            <dt>VAT</dt>
            <dd>{{ vatLabel(phase) }}</dd>
          </div>
          <div>
            <dt>Decision</dt>
            <dd>{{ decisionLabel(phase) }}</dd>
          </div>
        </dl>
      </article>
    </div>

    <div class="control-grid">
      <article class="control-panel">
        <h2>Scope control</h2>
        <ul class="audit-checklist">
          <li>No production commitment in this mockup</li>
          <li>No real iOceans integration in this phase</li>
          <li>No external APIs</li>
          <li>No real scientific data</li>
          <li>No credentials</li>
          <li>No raw internal tool exports</li>
          <li>Every phase has a decision gate</li>
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
import {
  getBudgetPhases,
  type BudgetPhaseRecord
} from '../../data/demoRepository'

const budgetPhases = getBudgetPhases()

function amountLabel(phase: BudgetPhaseRecord): string {
  return `${new Intl.NumberFormat('de-DE').format(phase.amountEur)} € + VAT`
}

function vatLabel(phase: BudgetPhaseRecord): string {
  return phase.vat === 'not_included' ? 'not included' : phase.vat
}

function decisionLabel(phase: BudgetPhaseRecord): string {
  const decisions: Record<string, string> = {
    DEMO_BUDGET_PHASE_0: 'approve discovery',
    DEMO_BUDGET_PHASE_1: 'approve initial build',
    DEMO_BUDGET_PHASE_0_1: 'approve initial package',
    DEMO_BUDGET_PROGRAM: 'approve by checkpoints'
  }

  return decisions[phase.id] ?? 'requires executive decision'
}
</script>
