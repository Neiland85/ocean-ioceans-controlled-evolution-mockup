import fs from 'node:fs'
import { describe, expect, it } from 'vitest'

describe('delivery wording', () => {
  it('keeps current demo delivery wording aligned with the two-block commercial model', () => {
    const runbook = fs.readFileSync('docs/demo/DEMO_RUNBOOK_v0.7.5.md', 'utf8')
    const endpointReview = fs.readFileSync('docs/demo/ENDPOINT_REVIEW_v0.7.5.md', 'utf8')
    const dashboard = fs.readFileSync('src/modules/entry/OperationalControlDashboard.vue', 'utf8')
    const text = `${runbook}\n${endpointReview}\n${dashboard}`

    expect(text).toContain('Block 1')
    expect(text).toContain('45,000 EUR + VAT')
    expect(text).toContain('Block 2')
    expect(text).toContain('105,000 EUR + VAT')
    expect(text).toContain('seven uneven')
    expect(text).toContain('Test Files: 14 passed')
    expect(text).toContain('Tests: 17 passed')
    expect(text).toContain('Client package')

    expect(text).not.toContain('32.000 € + VAT')
    expect(text).not.toContain('47.000 € + VAT')
    expect(text).not.toContain('Phase 0 and Phase 1 are presented as a controlled initial package')
    expect(text).not.toContain('Miguel, te paso una versión controlada del mockup en v0.7.0')
    expect(text).not.toContain('v0.7.1')
  })
})
