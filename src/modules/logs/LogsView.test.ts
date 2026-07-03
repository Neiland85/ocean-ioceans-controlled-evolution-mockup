import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import LogsView from './LogsView.vue'

describe('LogsView', () => {
  it('renders fixture-backed audit log guardrails', () => {
    const wrapper = mount(LogsView)

    expect(wrapper.text()).toContain('Logs View')
    expect(wrapper.text()).toContain('synthetic_demo')
    expect(wrapper.text()).toContain('No production logs')
    expect(wrapper.text()).toContain('No external logging service')
    expect(wrapper.text()).toContain('No action without target ID')
  })
})
