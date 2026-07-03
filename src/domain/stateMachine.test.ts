import { describe, expect, it } from 'vitest'
import { demoStateTransitions, operationalStates } from './stateMachine'

describe('state machine', () => {
  it('contains the required operational states', () => {
    expect(operationalStates).toContain('received')
    expect(operationalStates).toContain('pending_review')
    expect(operationalStates).toContain('approved')
    expect(operationalStates).toContain('requires_decision')
    expect(operationalStates).toContain('blocked_by_risk')
  })

  it('keeps demo transitions explainable and auditable', () => {
    for (const transition of demoStateTransitions) {
      expect(operationalStates).toContain(transition.from)
      expect(operationalStates).toContain(transition.to)
      expect(transition.actor.length).toBeGreaterThan(0)
      expect(transition.condition.length).toBeGreaterThan(0)
      expect(transition.generatedLog).toMatch(/^DEMO_LOG_/)
      expect(transition.avoidedError.length).toBeGreaterThan(0)
    }
  })
})
