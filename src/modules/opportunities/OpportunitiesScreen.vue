<template>
  <section class="opportunities-screen">
    <header class="dashboard-header">
      <p class="eyebrow">
        Opportunities / Offers
      </p>
      <h1>Opportunities Screen</h1>
      <p>
        Synthetic commercial pipeline view connected to controlled opportunity
        qualification, OES Funding Radar demo signals, review status, risk flags
        and executive decision gates.
      </p>
    </header>

    <div
      class="summary-grid"
      aria-label="Opportunity pipeline summary"
    >
      <article
        v-for="item in opportunitySummary"
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
        <h2>Pipeline logic</h2>
        <ol>
          <li>Opportunity enters as a synthetic record.</li>
          <li>Fit, stage, source and risk are made visible.</li>
          <li>Internal tool output remains simulated and reviewable.</li>
          <li>Executive decision gate is required before action.</li>
          <li>Audit reference controls traceability.</li>
        </ol>
      </article>

      <article class="control-panel">
        <h2>Demo opportunity</h2>

        <dl class="audit-definition">
          <div
            v-for="field in opportunityFields"
            :key="field.name"
            class="audit-field"
          >
            <dt>{{ field.name }}</dt>
            <dd>
              <strong>{{ field.value }}</strong>
              <span>{{ field.reason }}</span>
            </dd>
          </div>
        </dl>
      </article>

      <article class="control-panel">
        <h2>Commercial guardrails</h2>

        <ul class="audit-checklist">
          <li
            v-for="item in guardrails"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </article>
    </div>

    <article class="control-panel">
      <h2>Opportunity control matrix</h2>

      <div class="opportunity-table">
        <div class="opportunity-row opportunity-row-header">
          <span>Record</span>
          <span>Stage</span>
          <span>Fit</span>
          <span>Risk</span>
          <span>Decision</span>
          <span>Audit</span>
        </div>

        <div
          v-for="row in opportunityRows"
          :key="row.id"
          class="opportunity-row"
        >
          <span>{{ row.id }}</span>
          <span>{{ row.stage }}</span>
          <span>{{ row.fit }}</span>
          <span>{{ row.risk }}</span>
          <span>{{ row.decision }}</span>
          <span>{{ row.audit }}</span>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
const opportunitySummary = [
  {
    label: 'Opportunities',
    value: '1',
    hint: 'Synthetic opportunity record'
  },
  {
    label: 'Pipeline stage',
    value: 'Qualification',
    hint: 'Not approved for action yet'
  },
  {
    label: 'Decision status',
    value: 'Required',
    hint: 'Executive gate visible'
  },
  {
    label: 'Risk flags',
    value: '1',
    hint: 'Review before external use'
  },
  {
    label: 'Tool source',
    value: 'Demo',
    hint: 'No external calls'
  },
  {
    label: 'Audit refs',
    value: '1',
    hint: 'Traceability attached'
  }
]

const opportunityFields = [
  {
    name: 'id',
    value: 'DEMO_OPPORTUNITY_001',
    reason: 'Synthetic opportunity reference'
  },
  {
    name: 'title',
    value: 'Synthetic Coastal Monitoring Opportunity',
    reason: 'Demo title, not a real funding call'
  },
  {
    name: 'stage',
    value: 'qualification',
    reason: 'Requires review before action'
  },
  {
    name: 'source',
    value: 'demo_fixture',
    reason: 'No external radar call'
  },
  {
    name: 'status',
    value: 'requires_decision',
    reason: 'Executive gate is explicit'
  },
  {
    name: 'auditRef',
    value: 'DEMO_LOG_001',
    reason: 'Traceability marker'
  }
]

const guardrails = [
  'No real client names',
  'No real funding opportunities',
  'No scraped HTML',
  'No external API calls',
  'No automatic outreach',
  'No offer without review status',
  'No executive action without decision gate'
]

const opportunityRows = [
  {
    id: 'DEMO_OPPORTUNITY_001',
    stage: 'qualification',
    fit: 'medium_demo_fit',
    risk: 'requires_review',
    decision: 'executive_gate_required',
    audit: 'DEMO_LOG_001'
  },
  {
    id: 'DEMO_TOOL_SIGNAL_001',
    stage: 'screening',
    fit: 'synthetic_signal',
    risk: 'not_externalized',
    decision: 'human_review_required',
    audit: 'DEMO_LOG_001'
  },
  {
    id: 'DEMO_OFFER_FRAME_001',
    stage: 'decision_frame',
    fit: 'phase_0_candidate',
    risk: 'scope_creep',
    decision: 'phase_gate_required',
    audit: 'DEMO_LOG_001'
  }
]
</script>
