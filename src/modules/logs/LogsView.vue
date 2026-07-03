<template>
  <section class="logs-screen">
    <header class="dashboard-header">
      <p class="eyebrow">
        Audit Trail
      </p>
      <h1>Logs View</h1>
      <p>
        Fixture-backed audit log view for the controlled mockup. Every visible
        action is synthetic, timestamped and linked to a demo target.
      </p>
    </header>

    <div class="summary-grid">
      <article class="summary-card">
        <p class="summary-label">
          Audit logs
        </p>
        <strong>{{ auditLogs.length }}</strong>
        <span>Fixture-backed records</span>
      </article>

      <article class="summary-card">
        <p class="summary-label">
          Classification
        </p>
        <strong>synthetic_demo</strong>
        <span>No production logs</span>
      </article>

      <article class="summary-card">
        <p class="summary-label">
          Integrity
        </p>
        <strong>reviewable</strong>
        <span>Every action has a target</span>
      </article>
    </div>

    <div class="control-grid">
      <article
        v-for="log in auditLogs"
        :key="log.id"
        class="control-panel"
      >
        <h2>{{ log.action }}</h2>

        <dl class="audit-grid">
          <div class="audit-field">
            <dt>ID</dt>
            <dd>
              <strong>{{ log.id }}</strong>
              <span>{{ log.dataClassification }}</span>
            </dd>
          </div>

          <div class="audit-field">
            <dt>Actor</dt>
            <dd>
              <strong>{{ log.actorRole }}</strong>
              <span>{{ log.source }}</span>
            </dd>
          </div>

          <div class="audit-field">
            <dt>Target</dt>
            <dd>
              <strong>{{ log.targetId }}</strong>
              <span>{{ log.status }}</span>
            </dd>
          </div>

          <div class="audit-field">
            <dt>Review</dt>
            <dd>
              <strong>{{ log.reviewStatus }}</strong>
              <span>{{ log.riskFlag }}</span>
            </dd>
          </div>
        </dl>
      </article>

      <article class="control-panel">
        <h2>Audit guardrails</h2>
        <ul class="audit-checklist">
          <li>No production telemetry</li>
          <li>No real user identifiers</li>
          <li>No raw access logs</li>
          <li>No external logging service</li>
          <li>No action without actor role</li>
          <li>No action without target ID</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getAuditLogs } from '../../data/demoRepository'

const auditLogs = getAuditLogs()
</script>
