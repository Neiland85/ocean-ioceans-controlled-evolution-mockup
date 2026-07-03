import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import OpportunitiesView from './OpportunitiesView.vue'

describe('OpportunitiesView', () => {
  it('renders fixture-backed opportunity guardrails', () => {
    const wrapper = mount(OpportunitiesView)

    expect(wrapper.text()).toContain('Opportunities Screen')
    expect(wrapper.text()).toContain('synthetic_demo')
    expect(wrapper.text()).toContain('No real funding opportunities')
    expect(wrapper.text()).toContain('No external API calls')
    expect(wrapper.text()).toContain('requires_decision')
  })
})
