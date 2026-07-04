<template>
  <section class="budget-screen">
    <header class="dashboard-header">
      <p class="eyebrow">
        Phased Budget
      </p>
      <h1>Two-Block Budget Control</h1>
      <p>
        Executive decision frame backed by synthetic demo fixtures. The first
        client decision is Block 1: seven uneven task-valued phases totalling
        45,000 EUR + VAT.
      </p>
      <p>
        Block 2 remains a deferred expansion reference. It is not contracted at
        this stage.
      </p>
    </header>

    <div class="control-grid">
      <article class="control-panel">
        <h2>Block 1 — First contracted block</h2>
        <p>{{ blockOneTotalLabel }} across {{ blockOnePhases.length }} controlled phases.</p>
        <p>
          This is the first commercial commitment. It turns the mockup review
          into scoped, paid and executable work without asking OCEAN to approve
          the whole programme.
        </p>
      </article>

      <article class="control-panel">
        <h2>Block 2 — Deferred expansion block</h2>
        <p>{{ blockTwoTotalLabel }} as a later reference only.</p>
        <p>
          Block 2 should only be discussed after Block 1 produces evidence,
          scope clarity and an executive decision basis.
        </p>
      </article>

      <article class="control-panel">
        <h2>Programme reference</h2>
        <p>{{ programmeTotalLabel }} total reference, governed by blocks and decision gates.</p>
        <p>
          The first decision remains limited to Block 1.
        </p>
      </article>
    </div>

    <div class="budget-grid">
      <article
        v-for="phase in blockOnePhases"
        :key="phase.id"
        class="budget-card"
      >
        <div>
          <p class="summary-label">
            {{ phase.label }}
          </p>
          <h2>{{ amountLabel(phase) }}</h2>
          <p>{{ phase.meaning }}</p>

          <ul
            v-if="phase.scopeItems?.length"
            class="audit-checklist"
          >
            <li
              v-for="item in phase.scopeItems"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
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
          <li>Block 1 first contract: 45,000 EUR + VAT</li>
          <li>Block 1 has seven uneven phases valued by task weight</li>
          <li>Phase 0 is a paid start gate: 7,500 EUR + VAT</li>
          <li>Block 2 is deferred and not contracted now</li>
          <li>No production commitment in this mockup</li>
          <li>No real iOceans integration in this phase</li>
          <li>No external APIs</li>
          <li>No real scientific data</li>
          <li>No credentials</li>
          <li>Every phase has a decision gate</li>
        </ul>
      </article>

      <article class="control-panel">
        <h2>Executive reading</h2>
        <p>
          The buyer is not being asked to approve an undefined 150,000 EUR
          programme. The first professional step is Block 1: 45,000 EUR + VAT,
          split by real task value and controlled by decision gates.
        </p>
      </article>

      <article class="control-panel">
        <h2>Acceptance signal</h2>
        <p>
          OCEAN should understand what is approved now, what remains deferred
          and why the work is sequenced through controlled gates instead of
          open-ended architecture.
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
const blockOnePhases = budgetPhases.filter((phase) => phase.block === 'block_1')
const blockTwoPhases = budgetPhases.filter((phase) => phase.block === 'block_2')

const blockOneTotalEur = totalAmount(blockOnePhases)
const blockTwoTotalEur = totalAmount(blockTwoPhases)
const programmeTotalEur = blockOneTotalEur + blockTwoTotalEur

const blockOneTotalLabel = `${formatEur(blockOneTotalEur)} € + VAT`
const blockTwoTotalLabel = `${formatEur(blockTwoTotalEur)} € + VAT`
const programmeTotalLabel = `${formatEur(programmeTotalEur)} € + VAT`

function totalAmount(phases: readonly BudgetPhaseRecord[]): number {
  return phases.reduce((total, phase) => total + phase.amountEur, 0)
}

function amountLabel(phase: BudgetPhaseRecord): string {
  return `${formatEur(phase.amountEur)} € + VAT`
}

function formatEur(amount: number): string {
  return new Intl.NumberFormat('de-DE').format(amount)
}

function vatLabel(phase: BudgetPhaseRecord): string {
  return phase.vat === 'not_included' ? 'not included' : phase.vat
}

function decisionLabel(phase: BudgetPhaseRecord): string {
  const decisions: Record<string, string> = {
    DEMO_BLOCK_1_PHASE_0: 'approve paid Phase 0',
    DEMO_BLOCK_1_PHASE_1: 'approve operational data model',
    DEMO_BLOCK_1_PHASE_2: 'approve evidence review model',
    DEMO_BLOCK_1_PHASE_3: 'approve executive control frame',
    DEMO_BLOCK_1_PHASE_4: 'approve AI governance',
    DEMO_BLOCK_1_PHASE_5: 'approve validation contract',
    DEMO_BLOCK_1_PHASE_6: 'approve handoff and Block 2 decision basis'
  }

  return decisions[phase.id] ?? 'deferred executive decision'
}
</script>
