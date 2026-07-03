import { describe, expect, it } from 'vitest'
import {
  getAIActions,
  getAuditLogs,
  getBudgetPhases,
  getEvidenceAssets,
  getOpportunities
} from './demoRepository'

describe('demoRepository', () => {
  it('exposes fixture-backed demo datasets', () => {
    expect(getBudgetPhases()).toHaveLength(4)
    expect(getAuditLogs()).toHaveLength(1)
    expect(getOpportunities()).toHaveLength(1)
    expect(getAIActions()).toHaveLength(1)
    expect(getEvidenceAssets()).toHaveLength(1)
  })

  it('keeps all exported records synthetic and auditable', () => {
    const datasets = [
      getBudgetPhases(),
      getAuditLogs(),
      getOpportunities(),
      getAIActions(),
      getEvidenceAssets()
    ]

    for (const dataset of datasets) {
      for (const record of dataset) {
        expect(record.id).toMatch(/^DEMO_/)
        expect(record.dataClassification).toBe('synthetic_demo')
        expect(record.auditRef).toMatch(/^DEMO_LOG_/)
      }
    }
  })

  it('keeps the required budget amounts stable', () => {
    const amounts = getBudgetPhases().map((phase) => phase.amountEur)

    expect(amounts).toEqual([15000, 32000, 47000, 150000])
  })
})
