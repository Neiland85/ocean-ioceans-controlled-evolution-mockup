<template>
  <section class="opportunities-screen">
    <header class="dashboard-header">
      <p class="eyebrow">
        Opportunities / Offers
      </p>
      <h1>Opportunities Screen</h1>
      <p>
        Synthetic commercial pipeline for opportunity qualification, review
        status, risk flags and executive decision gates. No real clients, no
        real funding calls and no external APIs.
      </p>
    </header>

    <div class="summary-grid">
      <article class="summary-card">
        <p class="summary-label">
          Opportunities
        </p>
        <strong>1</strong>
        <span>Synthetic opportunity record</span>
      </article>

      <article class="summary-card">
        <p class="summary-label">
          Stage
        </p>
        <strong>Qualification</strong>
        <span>Not approved for action yet</span>
      </article>

      <article class="summary-card">
        <p class="summary-label">
          Decision
        </p>
        <strong>Required</strong>
        <span>Executive gate visible</span>
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
        <h2>Pipeline logic</h2>
        <ol>
          <li>Opportunity enters as a synthetic record.</li>
          <li>Fit, stage, source and risk are visible.</li>
          <li>Internal tool output remains simulated.</li>
          <li>Executive decision gate is required before action.</li>
          <li>Audit reference controls traceability.</li>
        </ol>
      </article>

      <article class="control-panel">
        <h2>Demo opportunity</h2>
        <dl class="audit-definition">
          <div class="audit-field">
            <dt>ID</dt>
            <dd>
              <strong>DEMO_OPPORTUNITY_001</strong>
              <span>Synthetic opportunity reference</span>
            </dd>
          </div>

          <div class="audit-field">
            <dt>Title</dt>
            <dd>
              <strong>Synthetic Coastal Monitoring Opportunity</strong>
              <span>Demo title, not a real funding call</span>
            </dd>
          </div>

          <div class="audit-field">
            <dt>Status</dt>
            <dd>
              <strong>requires_decision</strong>
              <span>Executive gate is explicit</span>
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
