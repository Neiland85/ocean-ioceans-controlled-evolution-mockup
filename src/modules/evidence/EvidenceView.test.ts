import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import EvidenceView from './EvidenceView.vue'

describe('EvidenceView', () => {
  it('renders fixture-backed evidence guardrails', () => {
    const wrapper = mount(EvidenceView)

    expect(wrapper.text()).toContain('Evidence View')
    expect(wrapper.text()).toContain('synthetic_demo')
    expect(wrapper.text()).toContain('No real scientific data')
    expect(wrapper.text()).toContain('DEMO_LOG_001')
    expect(wrapper.text()).toContain('No asset without audit reference')
  })
})
