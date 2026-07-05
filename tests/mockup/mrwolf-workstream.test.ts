import fs from 'node:fs'
import { describe, expect, it } from 'vitest'

describe('Mr.Wolf workstream', () => {
  it('keeps Mr.Wolf visible as a governed Block 1 workstream without claiming real integration', () => {
    const commercial = fs.readFileSync('docs/commercial/COMMERCIAL_BLOCK_PLAN_v0.7.7.md', 'utf8')
    const clientPackage = fs.readFileSync('docs/client-package/README.md', 'utf8')
    const spec = fs.readFileSync('docs/client-package/05_HERRAMIENTAS_INTERNAS_DEMO/MR_WOLF_DEMO_SPEC.md', 'utf8')
    const runbook = fs.readFileSync('docs/demo/DEMO_RUNBOOK_v0.7.5.md', 'utf8')
    const endpointReview = fs.readFileSync('docs/demo/ENDPOINT_REVIEW_v0.7.5.md', 'utf8')
    const text = `${commercial}\n${clientPackage}\n${spec}\n${runbook}\n${endpointReview}`

    expect(text).toContain('Mr.Wolf workstream')
    expect(text).toContain('Mr.Wolf operational layer')
    expect(text).toContain('Mr.Wolf technical contract')
    expect(text).toContain('Block 1')
    expect(text).toContain('does not replace Mr.Wolf')
    expect(text).toContain('does not rebuild it from scratch')
    expect(text).toContain('future integration readiness')
    expect(text).toContain('No real Mr.Wolf integration is included in the mockup')
    expect(text).toContain('no real Mr.Wolf API call')
    expect(text).toContain('no replacement of the existing internal tool')
  })
})
