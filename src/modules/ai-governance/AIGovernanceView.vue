<template>
  <section class="ai-governance-screen">
    <header class="dashboard-header">
      <p class="eyebrow">
        Governed AI Demo
      </p>
      <h1>Governed AI Screen</h1>
      <p>
        Fixture-backed AI governance screen. No real AI calls, no external API
        calls and no output can be published without human review.
      </p>
    </header>

    <div class="summary-grid">
      <article class="summary-card">
        <p class="summary-label">
          AI actions
        </p>
        <strong>{{ aiActions.length }}</strong>
        <span>Fixture-backed records</span>
      </article>

      <article class="summary-card">
        <p class="summary-label">
          Approval
        </p>
        <strong>humanApprovalRequired</strong>
        <span>AI cannot publish directly</span>
      </article>

      <article class="summary-card">
        <p class="summary-label">
          Audit
        </p>
        <strong>DEMO_LOG_001</strong>
        <span>Every AI action leaves a trace</span>
      </article>
    </div>

    <div class="control-grid">
      <article class="control-panel">
        <h2>Allowed AI use</h2>
        <ul class="audit-checklist">
          <li>Summarize synthetic evidence records</li>
          <li>Flag missing review status</li>
          <li>Suggest next internal demo step</li>
          <li>Draft non-binding report text</li>
          <li>Explain uncertainty and risk flags</li>
        </ul>
      </article>

      <article class="control-panel">
        <h2>Forbidden AI use</h2>
        <ul class="audit-checklist">
          <li>No real personal data</li>
          <li>No real scientific conclusions</li>
          <li>No external API calls</li>
          <li>No autonomous outreach</li>
          <li>No decision without human review</li>
          <li>No output without audit reference</li>
        </ul>
      </article>

      <article
        v-for="action in aiActions"
        :key="action.id"
        class="control-panel"
      >
        <h2>Demo AI action</h2>
        <dl class="audit-grid">
          <div class="audit-field">
            <dt>ID</dt>
            <dd>
              <strong>{{ action.id }}</strong>
              <span>{{ action.dataClassification }}</span>
            </dd>
          </div>

          <div class="audit-field">
            <dt>Action</dt>
            <dd>
              <strong>{{ action.actionType }}</strong>
              <span>Demo-only action</span>
            </dd>
          </div>

          <div class="audit-field">
            <dt>Review</dt>
            <dd>
              <strong>{{ reviewLabel(action.humanApprovalRequired) }}</strong>
              <span>AI cannot publish directly</span>
            </dd>
          </div>

          <div class="audit-field">
            <dt>Audit</dt>
            <dd>
              <strong>{{ action.auditRef }}</strong>
              <span>{{ action.source }}</span>
            </dd>
          </div>
        </dl>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getAIActions } from '../../data/demoRepository'

const aiActions = getAIActions()

function reviewLabel(required: boolean): string {
  return required ? 'humanApprovalRequired' : 'humanApprovalNotRequired'
}
</script>
