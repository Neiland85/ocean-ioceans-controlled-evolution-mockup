# Demo Runbook — OCEAN / iOceans Controlled Mockup v0.7.1

## Purpose

This runbook explains how to present the mockup in a short review session.

The intended audience is Miguel, OCEAN stakeholders and scientific reviewers.

## Recommended format

Preferred format:

```text
Live demo URL + 3 minute narrated walkthrough + repository validation notes
```

Terminal execution should be optional.

## What to avoid

Do not start with:

- npm commands
- repository structure
- implementation details
- framework explanation
- code walkthrough

Start with the operating model.

## Three minute demo script

### 0:00 — Opening

This is a controlled mockup, not a production system.

It contains no real OCEAN data, no credentials, no external APIs and no real scientific measurements.

The point is to make the operating model visible before connecting real systems.

### 0:20 — Budget

Show Budget first.

Explain:

Budget is represented as controlled phases, not an open-ended blank cheque.

Each phase is visible and reviewable.

### 0:45 — Opportunities

Show Opportunities.

Explain:

Opportunities are not automatically acted on.

They require review status and decision gates.

No outreach or offer is generated automatically.

### 1:10 — Governed AI

Show Governed AI.

Explain:

AI is treated as an assistant, not an authority.

It can summarize synthetic evidence or flag missing metadata, but it cannot produce final scientific conclusions or publish without human approval.

### 1:40 — Evidence

Show Evidence.

Explain:

Evidence is not a conclusion.

Evidence assets need source, method, review status and audit reference.

The model separates evidence, interpretation and decision.

### 2:10 — Logs

Show Logs.

Explain:

Every relevant action should leave a trace: actor role, target object, review status and risk flag.

Logs are part of the operating model, not decoration.

### 2:35 — Scientific Review Pack

Show:

```text
docs/science/SCIENTIFIC_REVIEW_PACK_v0.7.0.md
docs/science/SCIENTIST_REVIEW_CHECKLIST_v0.7.0.md
```

Explain:

This is included so scientific reviewers can evaluate the model without confusing the mockup with a final scientific platform.

### 2:55 — Close

The next step is not adding more screens.

The next step is deciding which entities, states, evidence assets and review gates matter for a real phase 1.

## Optional terminal validation

For technical validation, run:

```text
npm run check:all
```

Expected result at v0.7.0:

```text
Test Files: 10 passed
Tests: 13 passed
Build: passed
Sensitive material check: passed
Demo data validation: passed
```

## Preferred delivery package

Send Miguel:

- Live demo URL
- GitHub repository or release tag
- Short video walkthrough
- Delivery status document
- Client handoff document
- Scientific review pack
- Scientist checklist

## Suggested message

```text
Miguel, te paso una versión controlada del mockup en v0.7.0.

La forma más cómoda de revisarlo es abrir la demo y ver primero el vídeo corto. La terminal queda solo como validación técnica opcional.

Lo importante no es la interfaz en sí, sino el modelo operativo: evidencia, estados, revisión, logs, presupuesto, oportunidades e IA gobernada.

He añadido un paquete específico de revisión científica para que OCEAN pueda evaluar el enfoque sin confundir evidencia, interpretación, conclusión y decisión.
```
