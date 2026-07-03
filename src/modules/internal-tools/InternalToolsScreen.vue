<template>
  <section class="internal-tools-screen">
    <header class="dashboard-header">
      <p class="eyebrow">
        Internal Tools Demo
      </p>
      <h1>Internal Tools Screen</h1>
      <p>
        Controlled representation of MR. WOLF_ and OES Funding Radar as demo
        modules. No raw HTML, no real clients, no real opportunities and no
        external calls.
      </p>
    </header>

    <div class="tool-grid">
      <article
        v-for="tool in tools"
        :key="tool.id"
        class="tool-card"
      >
        <div>
          <p class="summary-label">
            {{ tool.category }}
          </p>
          <h2>{{ tool.name }}</h2>
          <p>{{ tool.purpose }}</p>
        </div>

        <dl class="budget-meta">
          <div>
            <dt>Input</dt>
            <dd>{{ tool.input }}</dd>
          </div>
          <div>
            <dt>Output</dt>
            <dd>{{ tool.output }}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{{ tool.status }}</dd>
          </div>
          <div>
            <dt>Audit</dt>
            <dd>{{ tool.audit }}</dd>
          </div>
        </dl>
      </article>
    </div>

    <div class="control-grid">
      <article class="control-panel">
        <h2>Allowed demo inputs</h2>
        <ul class="audit-checklist">
          <li
            v-for="item in allowedInputs"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </article>

      <article class="control-panel">
        <h2>Forbidden inputs</h2>
        <ul class="audit-checklist">
          <li
            v-for="item in forbiddenInputs"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </article>

      <article class="control-panel">
        <h2>Operational reason</h2>
        <p>
          The tools are shown as controlled internal capabilities, not as
          production integrations. Their role is to make intake, opportunity
          scanning, review status and traceability visible inside the mockup.
        </p>
      </article>
    </div>

    <article class="control-panel">
      <h2>Tool control matrix</h2>

      <div class="tool-table">
        <div class="tool-row tool-row-header">
          <span>Tool</span>
          <span>Role</span>
          <span>Risk avoided</span>
          <span>Decision gate</span>
        </div>

        <div
          v-for="row in controlMatrix"
          :key="row.tool"
          class="tool-row"
        >
          <span>{{ row.tool }}</span>
          <span>{{ row.role }}</span>
          <span>{{ row.risk }}</span>
          <span>{{ row.gate }}</span>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
const tools = [
  {
    id: 'DEMO_INTERNAL_TOOL_MR_WOLF',
    category: 'Operational intelligence',
    name: 'MR. WOLF_ Demo',
    purpose: 'Synthetic internal assistant for structured operational review.',
    input: 'Synthetic installation, evidence and state records',
    output: 'Review hints, missing fields and next-step suggestions',
    status: 'simulated_demo',
    audit: 'DEMO_LOG_001'
  },
  {
    id: 'DEMO_INTERNAL_TOOL_OES_RADAR',
    category: 'Opportunity radar',
    name: 'OES Funding Radar Demo',
    purpose: 'Synthetic opportunity qualification and funding pipeline view.',
    input: 'Synthetic opportunity records only',
    output: 'Stage, fit, risk and decision framing',
    status: 'simulated_demo',
    audit: 'DEMO_LOG_001'
  }
]

const allowedInputs = [
  'Synthetic demo records',
  'Synthetic opportunity stages',
  'Synthetic evidence summaries',
  'Synthetic review status',
  'Synthetic risk flags',
  'Synthetic audit references'
]

const forbiddenInputs = [
  'Raw HTML exports',
  'Real client names',
  'Real scientific measurements',
  'Real funding opportunities',
  'Credentials',
  'External API calls',
  'Unreviewed outputs'
]

const controlMatrix = [
  {
    tool: 'MR. WOLF_ Demo',
    role: 'Operational review support',
    risk: 'Unstructured decision-making',
    gate: 'Human review required'
  },
  {
    tool: 'OES Funding Radar Demo',
    role: 'Opportunity qualification',
    risk: 'Untracked commercial pipeline',
    gate: 'Executive decision required'
  },
  {
    tool: 'Shared audit layer',
    role: 'Traceability',
    risk: 'Invisible tool output',
    gate: 'Audit reference required'
  }
]
</script>
