import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BudgetView from './BudgetView.vue'

describe('BudgetView', () => {
  it('renders the controlled two-block budget frame', () => {
    const wrapper = mount(BudgetView)
    const text = wrapper.text()

    expect(text).toContain('Two-Block Budget Control')
    expect(text).toContain('Block 1')
    expect(text).toContain('45.000 € + VAT')
    expect(text).toContain('seven uneven')
    expect(text).toContain('Phase 0')
    expect(text).toContain('7.500 € + VAT')
    expect(text).toContain('Phase 1')
    expect(text).toContain('6.000 € + VAT')
    expect(text).toContain('Phase 2')
    expect(text).toContain('8.000 € + VAT')
    expect(text).toContain('Phase 3')
    expect(text).toContain('4.500 € + VAT')
    expect(text).toContain('Phase 4')
    expect(text).toContain('5.500 € + VAT')
    expect(text).toContain('Phase 5')
    expect(text).toContain('Phase 6')
    expect(text).toContain('Block 2')
    expect(text).toContain('105.000 € + VAT')
    expect(text).toContain('150.000 € + VAT')
    expect(text).toContain('not contracted now')

    expect(text).not.toContain('32.000 € + VAT')
    expect(text).not.toContain('47.000 € + VAT')
    expect(text).not.toContain('eight controlled phases')
  })
})
