<template>
  <section class="evidence-screen">
    <header class="dashboard-header">
      <p class="eyebrow">
        Scientific Evidence
      </p>
      <h1>Evidence View</h1>
      <p>
        Fixture-backed evidence asset view for the controlled mockup. Every
        evidence asset is synthetic, auditable and linked to a demo event.
      </p>
    </header>

    <div class="summary-grid">
      <article class="summary-card">
        <p class="summary-label">
          Evidence assets
        </p>
        <strong>{{ evidenceAssets.length }}</strong>
        <span>Fixture-backed records</span>
      </article>

      <article class="summary-card">
        <p class="summary-label">
          Classification
        </p>
        <strong>synthetic_demo</strong>
        <span>No real scientific data</span>
      </article>

      <article class="summary-card">
        <p class="summary-label">
          Audit
        </p>
        <strong>DEMO_LOG_001</strong>
        <span>Every asset leaves a trace</span>
      </article>
    </div>

    <div class="control-grid">
      <article
        v-for="asset in evidenceAssets"
        :key="asset.id"
        class="control-panel"
      >
        <h2>{{ asset.assetType }}</h2>

        <dl class="audit-grid">
          <div class="audit-field">
            <dt>ID</dt>
            <dd>
              <strong>{{ asset.id }}</strong>
              <span>{{ asset.dataClassification }}</span>
            </dd>
          </div>

          <div class="audit-field">
            <dt>Event</dt>
            <dd>
              <strong>{{ asset.eventId }}</strong>
              <span>{{ asset.status }}</span>
            </dd>
          </div>

          <div class="audit-field">
            <dt>Checksum</dt>
            <dd>
              <strong>{{ asset.checksum }}</strong>
              <span>synthetic checksum only</span>
            </dd>
          </div>

          <div class="audit-field">
            <dt>Audit</dt>
            <dd>
              <strong>{{ asset.auditRef }}</strong>
              <span>{{ asset.source }}</span>
            </dd>
          </div>
        </dl>
      </article>

      <article class="control-panel">
        <h2>Evidence guardrails</h2>
        <ul class="audit-checklist">
          <li>No real scientific measurements</li>
          <li>No real customer data</li>
          <li>No raw field exports</li>
          <li>No unverifiable conclusions</li>
          <li>No asset without audit reference</li>
          <li>No report without review status</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getEvidenceAssets } from '../../data/demoRepository'

const evidenceAssets = getEvidenceAssets()
</script>
