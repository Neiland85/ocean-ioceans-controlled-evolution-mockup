import { describe, expect, it } from 'vitest'
import { getBudgetPhases } from '../../src/data/demoRepository'

describe('commercial budget model', () => {
  it('keeps Block 1 as the first contracted block and Block 2 as deferred reference', () => {
    const phases = getBudgetPhases()
    const blockOne = phases.filter((phase) => phase.block === 'block_1')
    const blockTwo = phases.filter((phase) => phase.block === 'block_2')

    const total = (items: typeof phases) =>
      items.reduce((sum, item) => sum + item.amountEur, 0)

    expect(blockOne).toHaveLength(7)
    expect(blockTwo).toHaveLength(1)

    expect(total(blockOne)).toBe(45000)
    expect(total(blockTwo)).toBe(105000)
    expect(total(phases)).toBe(150000)

    expect(blockOne.map((phase) => phase.amountEur)).toEqual([
      7500,
      6000,
      8000,
      4500,
      5500,
      6000,
      7500
    ])

    expect(blockOne.every((phase) => phase.contractStatus === 'contract_first')).toBe(true)
    expect(blockTwo.every((phase) => phase.contractStatus === 'deferred_reference')).toBe(true)
  })
})
