import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BudgetView from './BudgetView.vue'

describe('BudgetView', () => {
  it('renders the controlled phased budget frame', () => {
    const wrapper = mount(BudgetView)

    expect(wrapper.text()).toContain('Phase 0')
    expect(wrapper.text()).toContain('15.000 € + VAT')
    expect(wrapper.text()).toContain('Phase 1')
    expect(wrapper.text()).toContain('32.000 € + VAT')
    expect(wrapper.text()).toContain('47.000 € + VAT')
    expect(wrapper.text()).toContain('150.000 € + VAT')
    expect(wrapper.text()).toContain('not a blank cheque')
  })
})
