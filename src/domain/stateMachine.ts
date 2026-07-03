import type { OperationalStatus } from './types'

export const operationalStates: OperationalStatus[] = [
  'received',
  'validating_format',
  'pending_review',
  'rejected',
  'approved',
  'in_analysis',
  'reviewed',
  'exportable',
  'internally_published',
  'archived',
  'blocked_by_risk',
  'requires_decision'
]

export interface StateTransition {
  from: OperationalStatus
  to: OperationalStatus
  actor: string
  condition: string
  generatedLog: string
  avoidedError: string
}

export const demoStateTransitions: StateTransition[] = [
  {
    from: 'received',
    to: 'validating_format',
    actor: 'Demo Operator',
    condition: 'Synthetic record received through single entry point',
    generatedLog: 'DEMO_LOG_001',
    avoidedError: 'Untracked intake'
  },
  {
    from: 'pending_review',
    to: 'approved',
    actor: 'Scientific Reviewer',
    condition: 'Synthetic evidence reviewed',
    generatedLog: 'DEMO_LOG_001',
    avoidedError: 'Unreviewed evidence export'
  },
  {
    from: 'requires_decision',
    to: 'internally_published',
    actor: 'Executive Reviewer',
    condition: 'Phase decision accepted for demo',
    generatedLog: 'DEMO_LOG_001',
    avoidedError: 'Open-ended scope'
  }
]

