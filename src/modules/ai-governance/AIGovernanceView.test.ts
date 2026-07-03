import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AIGovernanceView from './AIGovernanceView.vue'

describe('AIGovernanceView', () => {
  it('renders governed AI guardrails', () => {
    const wrapper = mount(AIGovernanceView)

    expect(wrapper.text()).toContain('Governed AI Screen')
    expect(wrapper.text()).toContain('No real AI calls')
    expect(wrapper.text()).toContain('No external API calls')
    expect(wrapper.text()).toContain('humanApprovalRequired')
    expect(wrapper.text()).toContain('DEMO_AI_ACTION_001')
    expect(wrapper.text()).toContain('DEMO_LOG_001')
  })
})
