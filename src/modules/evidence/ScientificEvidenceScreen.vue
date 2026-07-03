<template>
  <section class="evidence-screen">
    <header class="dashboard-header">
      <p class="eyebrow">
        Scientific Evidence
      </p>
      <h1>Scientific Evidence Screen</h1>
      <p>
        Synthetic evidence overview for installations, monitoring events,
        measurements, species observations, uncertainty, review status and
        audit references.
      </p>
    </header>

    <div
      class="summary-grid"
      aria-label="Scientific evidence summary"
    >
      <article
        v-for="item in evidenceSummary"
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
        <h2>Evidence chain</h2>
        <ol>
          <li>Installation receives a synthetic monitoring event.</li>
          <li>Evidence asset is linked to the event.</li>
          <li>Measurement and species observation are recorded.</li>
          <li>Uncertainty and review status are made visible.</li>
          <li>Audit reference controls exportability.</li>
        </ol>
      </article>

      <article class="control-panel">
        <h2>Demo evidence asset</h2>

        <dl class="audit-definition">
          <div
            v-for="field in evidenceAsset"
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
        <h2>Scientific review guardrails</h2>

        <ul class="audit-checklist">
          <li
            v-for="item in reviewGuardrails"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </article>
    </div>

    <article class="control-panel">
      <h2>Measurement and observation matrix</h2>

      <div class="evidence-table">
        <div class="evidence-row evidence-row-header">
          <span>Record</span>
          <span>Type</span>
          <span>Status</span>
          <span>Uncertainty / Review</span>
          <span>Audit</span>
        </div>

        <div
          v-for="record in evidenceRecords"
          :key="record.id"
          class="evidence-row"
        >
          <span>{{ record.id }}</span>
          <span>{{ record.type }}</span>
          <span>{{ record.status }}</span>
          <span>{{ record.review }}</span>
          <span>{{ record.audit }}</span>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
const evidenceSummary = [
  {
    label: 'Installations',
    value: '1',
    hint: 'Synthetic installation under analysis'
  },
  {
    label: 'Monitoring events',
    value: '1',
    hint: 'Visual monitoring demo event'
  },
  {
    label: 'Evidence assets',
    value: '1',
    hint: 'Synthetic photo reference'
  },
  {
    label: 'Measurements',
    value: '1',
    hint: 'Synthetic biodiversity score'
  },
  {
    label: 'Species observations',
    value: '1',
    hint: 'Synthetic species group'
  },
  {
    label: 'Reviews',
    value: '1',
    hint: 'Approved for demo export'
  }
]

const evidenceAsset = [
  {
    name: 'installationId',
    value: 'DEMO_INSTALLATION_001',
    reason: 'Links evidence to the demo installation'
  },
  {
    name: 'eventId',
    value: 'DEMO_EVENT_001',
    reason: 'Links asset to monitoring event'
  },
  {
    name: 'assetId',
    value: 'DEMO_EVIDENCE_001',
    reason: 'Synthetic evidence asset reference'
  },
  {
    name: 'checksum',
    value: 'DEMO_SYNTHETIC_CHECKSUM_001',
    reason: 'Demo integrity marker, not a real hash'
  },
  {
    name: 'classification',
    value: 'synthetic_demo',
    reason: 'No real scientific data allowed'
  },
  {
    name: 'auditRef',
    value: 'DEMO_LOG_001',
    reason: 'Traceable demo action'
  }
]

const reviewGuardrails = [
  'No real coordinates',
  'No real species data',
  'No real client installation',
  'No raw media files',
  'No scientific claim without review status',
  'No export without audit reference',
  'No AI-generated conclusion without human review'
]

const evidenceRecords = [
  {
    id: 'DEMO_EVENT_001',
    type: 'Monitoring event',
    status: 'reviewed',
    review: 'Reviewed synthetic event',
    audit: 'DEMO_LOG_001'
  },
  {
    id: 'DEMO_EVIDENCE_001',
    type: 'Evidence asset',
    status: 'approved',
    review: 'Approved synthetic asset',
    audit: 'DEMO_LOG_001'
  },
  {
    id: 'DEMO_MEASUREMENT_001',
    type: 'Measurement',
    status: 'pending_review',
    review: 'Medium uncertainty',
    audit: 'DEMO_LOG_001'
  },
  {
    id: 'DEMO_SPECIES_OBSERVATION_001',
    type: 'Species observation',
    status: 'reviewed',
    review: 'Synthetic species group',
    audit: 'DEMO_LOG_001'
  }
]
</script>
