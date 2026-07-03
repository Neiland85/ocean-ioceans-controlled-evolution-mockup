<template>
  <section class="opportunities-screen">
    <header class="dashboard-header">
      <p class="eyebrow">
        Synthetic Opportunities
      </p>
      <h1>Opportunities Screen</h1>
      <p>
        Fixture-backed opportunity pipeline for the controlled mockup. Every
        opportunity is synthetic, reviewable and blocked from executive action
        until a decision gate is explicit.
      </p>
    </header>

    <div class="summary-grid">
      <article class="summary-card">
        <p class="summary-label">
          Opportunities
        </p>
        <strong>{{ opportunities.length }}</strong>
        <span>Fixture-backed records</span>
      </article>

      <article class="summary-card">
        <p class="summary-label">
          Classification
        </p>
        <strong>synthetic_demo</strong>
        <span>No real funding data</span>
      </article>

      <article class="summary-card">
        <p class="summary-label">
          Decision
        </p>
        <strong>requires_decision</strong>
        <span>Executive gate is explicit</span>
      </article>
    </div>

    <div class="control-grid">
      <article
        v-for="opportunity in opportunities"
        :key="opportunity.id"
        class="control-panel"
      >
        <h2>{{ opportunity.title }}</h2>
        <dl class="audit-grid">
          <div class="audit-field">
            <dt>ID</dt>
            <dd>
              <strong>{{ opportunity.id }}</strong>
              <span>{{ opportunity.dataClassification }}</span>
            </dd>
          </div>

          <div class="audit-field">
            <dt>Stage</dt>
            <dd>
              <strong>{{ opportunity.stage }}</strong>
              <span>{{ opportunity.status }}</span>
            </dd>
          </div>

          <div class="audit-field">
            <dt>Review</dt>
            <dd>
              <strong>{{ opportunity.reviewStatus }}</strong>
              <span>{{ opportunity.riskFlag }}</span>
            </dd>
          </div>

          <div class="audit-field">
            <dt>Audit</dt>
            <dd>
              <strong>{{ opportunity.auditRef }}</strong>
              <span>{{ opportunity.source }}</span>
            </dd>
          </div>
        </dl>
      </article>

      <article class="control-panel">
        <h2>Commercial guardrails</h2>
        <ul class="audit-checklist">
          <li>No real client names</li>
          <li>No real funding opportunities</li>
          <li>No scraped HTML</li>
          <li>No external API calls</li>
          <li>No automatic outreach</li>
          <li>No offer without review status</li>
          <li>No executive action without decision gate</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getOpportunities } from '../../data/demoRepository'

const opportunities = getOpportunities()
</script>
