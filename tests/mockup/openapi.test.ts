import fs from 'node:fs'
import { describe, expect, it } from 'vitest'

describe('OpenAPI mock contract', () => {
  it('documents only synthetic demo endpoints', () => {
    const text = fs.readFileSync('docs/openapi/ocean-mockup.openapi.yaml', 'utf8')

    expect(text).toContain('Synthetic mock contract only')
    expect(text).toContain('/demo/installations')
    expect(text).toContain('/demo/evidence-assets')
    expect(text).toContain('/demo/opportunities')
    expect(text).toContain('/demo/audit-logs')
    expect(text).toContain('/demo/ai-actions')
    expect(text).toContain('synthetic_demo')

    expect(text).not.toMatch(/https?:\/\//i)
    expect(text).not.toMatch(/api[_-]?key|client_secret|bearer|password/i)
  })
})
