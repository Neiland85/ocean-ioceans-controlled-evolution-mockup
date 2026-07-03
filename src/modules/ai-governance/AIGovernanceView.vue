<template>
  <section class="ai-governance-screen">
    <header class="dashboard-header">
      <p class="eyebrow">
        Governed AI Demo
      </p>
      <h1>Governed AI Screen</h1>
      <p>
        Simulated AI actions with explicit purpose, allowed inputs, forbidden
        inputs, human review and audit references. No real AI calls, no external
        APIs and no unreviewed conclusions.
      </p>
    </header>

    <div class="summary-grid">
      <article class="summary-card">
        <p class="summary-label">
          AI actions
        </p>
        <strong>1</strong>
        <span>Simulated demo action</span>
      </article>

      <article class="summary-card">
        <p class="summary-label">
          Approval
        </p>
        <strong>Required</strong>
        <span>Human review before use</span>
      </article>

      <article class="summary-card">
        <p class="summary-label">
          Data
        </p>
        <strong>Synthetic</strong>
        <span>No real records allowed</span>
      </article>

      <article class="summary-card">
        <p class="summary-label">
          Audit
        </p>
        <strong>DEMO_LOG_001</strong>
        <span>Traceability attached</span>
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

      <article class="control-panel">
        <h2>Demo AI action</h2>
        <dl class="audit-definition">
          <div class="audit-field">
            <dt>ID</dt>
            <dd>
              <strong>DEMO_AI_ACTION_001</strong>
              <span>Synthetic AI action reference</span>
            </dd>
          </div>

          <div class="audit-field">
            <dt>Action</dt>
            <dd>
              <strong>summarize_synthetic_evidence</strong>
              <span>Demo-only summary action</span>
            </dd>
          </div>

          <div class="audit-field">
            <dt>Review</dt>
            <dd>
              <strong>humanApprovalRequired</strong>
              <span>AI cannot publish directly</span>
            </dd>
          </div>
        </dl>
      </article>
    </div>
  </section>
</template>
