# Endpoint Review — OCEAN / iOceans Mock Contract v0.7.5

## Purpose

This document reviews the mock OpenAPI contract used by the controlled OCEAN / iOceans mockup.

The endpoints are synthetic. They do not call real systems, real APIs, real databases, real OCEAN services or real scientific datasets.

## Contract status

Contract file:

```text
docs/openapi/ocean-mockup.openapi.yaml
```

Validation test:

```text
tests/mockup/openapi.test.ts
```

The OpenAPI test checks that the contract documents synthetic demo endpoints and avoids external URLs, API keys, client secrets, bearer tokens or passwords.

## Endpoint list

### GET /demo/installations

Represents synthetic installation-level operational records.

It demonstrates operational entity framing, state visibility, synthetic contract shape and future integration boundaries.

It does not retrieve real OCEAN installations, connect to a production database or expose real coordinates, assets or clients.

### GET /demo/evidence-assets

Represents synthetic scientific evidence assets.

It demonstrates evidence object framing, audit reference requirements, separation between evidence and conclusion and future scientific review boundaries.

It does not expose real measurements, produce scientific conclusions, connect to field data systems or replace scientific review.

### GET /demo/opportunities

Represents synthetic commercial or operational opportunities.

It demonstrates opportunity review flow, decision gate framing, non-automatic commercial action and traceable review state.

It does not use real funding opportunities, scrape public sources, perform outreach or create offers automatically.

### GET /demo/audit-logs

Represents synthetic audit trail records.

It demonstrates actor role, target object, review status, risk flag and traceability.

It does not expose production telemetry, real user identifiers or a real logging service.

### GET /demo/ai-actions

Represents synthetic governed AI actions.

It demonstrates AI action boundaries, human approval requirement, audit reference and forbidden autonomous action.

It does not call a real AI provider, use real data, generate binding conclusions or publish output without review.

## Scientific review relevance

For scientific reviewers, the most important endpoints are:

```text
/demo/evidence-assets
/demo/audit-logs
/demo/ai-actions
```

These endpoints show the intended separation between:

```text
evidence
review
AI assistance
audit trace
decision
```

## Executive review relevance

For executive or operational reviewers, the most important endpoints are:

```text
/demo/installations
/demo/opportunities
/demo/audit-logs
```

These endpoints show how operational entities, opportunities and logs could be represented before any real system integration.

## Commercial review relevance

For commercial review, the current budget model is not an endpoint.

It is represented through synthetic fixtures and UI state:

```text
src/data/budget.demo.json
src/modules/budget/BudgetPhaseView.vue
docs/commercial/COMMERCIAL_BLOCK_PLAN_v0.7.2.md
```

The current commercial model is:

```text
Block 1: 45,000 EUR + VAT
Block 2: 105,000 EUR + VAT
Total reference: 150,000 EUR + VAT
```

## Current limitation

The OpenAPI contract is a mock contract.

It is not a backend implementation.

The current frontend reads from synthetic fixtures through:

```text
src/data/demoRepository.ts
```

## Recommended next step

Before connecting real data, OCEAN should decide:

- Which endpoints are required in the first real implementation
- Which objects require scientific review
- Which objects require audit immutability
- Which AI actions are permitted
- Which AI actions are forbidden
- Which fields must never be optional
- Which states are operationally meaningful
