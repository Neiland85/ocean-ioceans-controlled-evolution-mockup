import aiActionsFixture from './ai-actions.demo.json'
import budgetFixture from './budget.demo.json'
import evidenceAssetsFixture from './evidence-assets.demo.json'
import logsFixture from './logs.demo.json'
import opportunitiesFixture from './opportunities.demo.json'

export interface BaseDemoRecord {
  id: string
  status: string
  dataClassification: 'synthetic_demo'
  createdAt: string
  updatedAt: string
  source: string
  reviewStatus: string
  riskFlag: string
  auditRef: string
}

export interface DemoFixture<T extends BaseDemoRecord> {
  dataClassification: 'synthetic_demo'
  records: readonly T[]
}

export interface BudgetPhaseRecord extends BaseDemoRecord {
  label: string
  amountEur: number
  vat: 'not_included'
  meaning: string
}

export interface AuditLogRecord extends BaseDemoRecord {
  actorRole: string
  action: string
  targetId: string
}

export interface OpportunityRecord extends BaseDemoRecord {
  title: string
  stage: string
}

export interface AIActionRecord extends BaseDemoRecord {
  actionType: string
  humanApprovalRequired: boolean
}

export interface EvidenceAssetRecord extends BaseDemoRecord {
  eventId: string
  assetType: string
  checksum: string
}

function recordsFromFixture<T extends BaseDemoRecord>(fixture: unknown): readonly T[] {
  return (fixture as DemoFixture<T>).records
}

export function getBudgetPhases(): readonly BudgetPhaseRecord[] {
  return recordsFromFixture<BudgetPhaseRecord>(budgetFixture)
}

export function getAuditLogs(): readonly AuditLogRecord[] {
  return recordsFromFixture<AuditLogRecord>(logsFixture)
}

export function getOpportunities(): readonly OpportunityRecord[] {
  return recordsFromFixture<OpportunityRecord>(opportunitiesFixture)
}

export function getAIActions(): readonly AIActionRecord[] {
  return recordsFromFixture<AIActionRecord>(aiActionsFixture)
}

export function getEvidenceAssets(): readonly EvidenceAssetRecord[] {
  return recordsFromFixture<EvidenceAssetRecord>(evidenceAssetsFixture)
}
