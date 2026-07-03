export type DataClassification = 'synthetic_demo'

export type OperationalStatus =
  | 'received'
  | 'validating_format'
  | 'pending_review'
  | 'rejected'
  | 'approved'
  | 'in_analysis'
  | 'reviewed'
  | 'exportable'
  | 'internally_published'
  | 'archived'
  | 'blocked_by_risk'
  | 'requires_decision'
  | 'active'

export interface BaseDemoEntity {
  id: string
  status: OperationalStatus
  dataClassification: DataClassification
  createdAt: string
  updatedAt: string
  source: 'demo_fixture'
  reviewStatus: OperationalStatus
  riskFlag: string
  auditRef: string
}

export interface User extends BaseDemoEntity {
  roleId: string
  displayName: string
}

export interface Role extends BaseDemoEntity {
  name: string
  permissions: Permission[]
}

export type Permission =
  | 'view_dashboard'
  | 'review_budget'
  | 'approve_phase'
  | 'view_evidence'
  | 'review_ai_action'
  | 'view_logs'

export interface Location extends BaseDemoEntity {
  label: string
  region: string
}

export interface Installation extends BaseDemoEntity {
  locationId: string
  name: string
}

export interface MonitoringEvent extends BaseDemoEntity {
  installationId: string
  eventType: string
}

export interface EvidenceAsset extends BaseDemoEntity {
  eventId: string
  assetType: string
  checksum: string
}

export interface Measurement extends BaseDemoEntity {
  eventId: string
  metric: string
  value: number
  unit: string
  uncertainty: string
}

export interface SpeciesObservation extends BaseDemoEntity {
  eventId: string
  speciesLabel: string
  count: number
}

export interface Review extends BaseDemoEntity {
  targetId: string
  reviewerRole: string
  decision: string
}

export interface InternalTool extends BaseDemoEntity {
  name: string
  purpose: string
}

export interface Opportunity extends BaseDemoEntity {
  title: string
  stage: string
}

export interface BudgetPhase extends BaseDemoEntity {
  label: string
  amountEur: number
  vat: 'not_included'
  meaning: string
}

export interface AIAction extends BaseDemoEntity {
  actionType: string
  humanApprovalRequired: boolean
}

export interface AuditLog extends BaseDemoEntity {
  actorRole: string
  action: string
  targetId: string
}

export interface Report extends BaseDemoEntity {
  title: string
}

