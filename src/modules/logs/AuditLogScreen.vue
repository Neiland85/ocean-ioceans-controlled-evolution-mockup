<template>
  <section class="audit-screen">
    <header class="dashboard-header">
      <p class="eyebrow">
        Logs and Audit
      </p>
      <h1>Audit Log Screen</h1>
      <p>
        Synthetic audit view for controlled operational traceability. Every
        visible movement must explain actor, action, target, state and generated
        evidence trail.
      </p>
    </header>

    <div class="control-grid">
      <article class="control-panel">
        <h2>Audit log record</h2>

        <dl class="audit-definition">
          <div
            v-for="field in logFields"
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
        <h2>State transitions</h2>

        <div class="transition-list">
          <article
            v-for="transition in transitions"
            :key="transition.id"
            class="transition-card"
          >
            <p class="transition-path">
              {{ transition.from }} → {{ transition.to }}
            </p>
            <p>
              <strong>Actor:</strong>
              {{ transition.actor }}
            </p>
            <p>
              <strong>Generated log:</strong>
              {{ transition.generatedLog }}
            </p>
            <p>
              <strong>Avoided error:</strong>
              {{ transition.avoidedError }}
            </p>
          </article>
        </div>
      </article>

      <article class="control-panel">
        <h2>Export guardrails</h2>

        <ul class="audit-checklist">
          <li
            v-for="item in checklist"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const logFields = [
  {
    name: 'id',
    value: 'DEMO_LOG_001',
    reason: 'Synthetic audit reference'
  },
  {
    name: 'actorRole',
    value: 'System Demo',
    reason: 'No personal identity required'
  },
  {
    name: 'action',
    value: 'created_demo_record',
    reason: 'Action is explicit and reviewable'
  },
  {
    name: 'targetId',
    value: 'DEMO_INSTALLATION_001',
    reason: 'Target entity is traceable'
  },
  {
    name: 'dataClassification',
    value: 'synthetic_demo',
    reason: 'No real data allowed'
  },
  {
    name: 'riskFlag',
    value: 'none',
    reason: 'Visible risk status'
  }
]

const transitions = [
  {
    id: 'DEMO_TRANSITION_001',
    from: 'received',
    to: 'validating_format',
    actor: 'Demo Operator',
    generatedLog: 'DEMO_LOG_001',
    avoidedError: 'Untracked intake'
  },
  {
    id: 'DEMO_TRANSITION_002',
    from: 'pending_review',
    to: 'approved',
    actor: 'Scientific Reviewer',
    generatedLog: 'DEMO_LOG_001',
    avoidedError: 'Unreviewed evidence export'
  },
  {
    id: 'DEMO_TRANSITION_003',
    from: 'requires_decision',
    to: 'internally_published',
    actor: 'Executive Reviewer',
    generatedLog: 'DEMO_LOG_001',
    avoidedError: 'Open-ended scope'
  }
]

const checklist = [
  'No real emails',
  'No raw HTML',
  'No credentials',
  'No external APIs',
  'Only synthetic demo records',
  'Every output needs review status',
  'Every decision needs an audit reference'
]
</script>
