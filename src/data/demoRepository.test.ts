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
    expect(getBudgetPhases()).toHaveLength(8)
    expect(getAuditLogs()).toHaveLength(1)
    expect(getOpportunities()).toHaveLength(1)
    expect(getAIActions()).toHaveLength(1)
    expect(getEvidenceAssets()).toHaveLength(1)
  })

  it('keeps all exported records synthetic and auditable', () => {
    const allRecords = [
      ...getBudgetPhases(),
      ...getAuditLogs(),
      ...getOpportunities(),
      ...getAIActions(),
      ...getEvidenceAssets()
    ]

    expect(allRecords.length).toBeGreaterThan(0)

    for (const record of allRecords) {
      expect(record.dataClassification).toBe('synthetic_demo')
      expect(record.source).toBe('demo_fixture')
      expect(record.auditRef).toMatch(/^DEMO_LOG_/)
      expect(record.reviewStatus).toBeTruthy()
      expect(record.riskFlag).toBeTruthy()
    }
  })

  it('keeps the two-block commercial budget model stable', () => {
    const phases = getBudgetPhases()
    const blockOne = phases.filter((phase) => phase.block === 'block_1')
    const blockTwo = phases.filter((phase) => phase.block === 'block_2')

    const total = (items: typeof phases) =>
      items.reduce((sum, item) => sum + item.amountEur, 0)

    expect(blockOne).toHaveLength(7)
    expect(blockTwo).toHaveLength(1)

    expect(blockOne.map((phase) => phase.amountEur)).toEqual([
      7500,
      6000,
      8000,
      4500,
      5500,
      6000,
      7500
    ])

    expect(total(blockOne)).toBe(45000)
    expect(total(blockTwo)).toBe(105000)
    expect(total(phases)).toBe(150000)

    expect(blockOne.every((phase) => phase.contractStatus === 'contract_first')).toBe(true)
    expect(blockTwo.every((phase) => phase.contractStatus === 'deferred_reference')).toBe(true)
  })
})
