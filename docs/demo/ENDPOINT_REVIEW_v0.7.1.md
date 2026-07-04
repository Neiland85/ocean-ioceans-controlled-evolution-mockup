# Endpoint Review — OCEAN / iOceans Mock Contract v0.7.1

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

Purpose:

Represents synthetic installation-level operational records.

What it demonstrates:

- Operational entity framing
- State visibility
- Synthetic contract shape
- Future integration boundary

What it does not do:

- It does not retrieve real OCEAN installations.
- It does not connect to a production database.
- It does not expose real coordinates, assets or clients.

### GET /demo/evidence-assets

Purpose:

Represents synthetic scientific evidence assets.

What it demonstrates:

- Evidence object framing
- Audit reference requirement
- Separation between evidence and conclusion
- Future scientific review boundary

What it does not do:

- It does not expose real measurements.
- It does not produce scientific conclusions.
- It does not connect to field data systems.
- It does not replace scientific review.

### GET /demo/opportunities

Purpose:

Represents synthetic commercial or operational opportunities.

What it demonstrates:

- Opportunity review flow
- Decision gate framing
- Non-automatic commercial action
- Traceable review state

What it does not do:

- It does not use real funding opportunities.
- It does not scrape public sources.
- It does not perform outreach.
- It does not create offers automatically.

### GET /demo/audit-logs

Purpose:

Represents synthetic audit trail records.

What it demonstrates:

- Actor role
- Target object
- Review status
- Risk flag
- Traceability

What it does not do:

- It does not expose production telemetry.
- It does not expose real user identifiers.
- It does not connect to a logging service.
- It does not replace immutable audit infrastructure.

### GET /demo/ai-actions

Purpose:

Represents synthetic governed AI actions.

What it demonstrates:

- AI action boundaries
- Human approval requirement
- Audit reference
- Forbidden autonomous action

What it does not do:

- It does not call a real AI provider.
- It does not use real data.
- It does not generate binding conclusions.
- It does not publish output without review.

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

## Current limitation

The OpenAPI contract is a mock contract.

It is not a backend implementation.

The current frontend reads from synthetic fixtures through:

```text
src/data/demoRepository.ts
```

## Recommended next step

Before connecting real data, OCEAN should decide:

- Which endpoints are required in phase 1
- Which objects require scientific review
- Which objects require audit immutability
- Which AI actions are permitted
- Which AI actions are forbidden
- Which fields must never be optional
- Which states are operationally meaningful
