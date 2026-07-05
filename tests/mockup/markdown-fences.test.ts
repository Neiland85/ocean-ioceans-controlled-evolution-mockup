import fs from 'node:fs'
import { describe, expect, it } from 'vitest'

const markdownFiles = [
  'docs/demo/DEMO_RUNBOOK_v0.7.5.md',
  'docs/demo/ENDPOINT_REVIEW_v0.7.5.md',
  'docs/commercial/COMMERCIAL_BLOCK_PLAN_v0.7.2.md',
  'docs/commercial/COMMERCIAL_BLOCK_PLAN_v0.7.7.md',
  'docs/client-package/README.md',
  'docs/client-package/05_HERRAMIENTAS_INTERNAS_DEMO/MR_WOLF_DEMO_SPEC.md',
  'docs/science/SCIENTIFIC_REVIEW_PACK_v0.7.0.md',
  'docs/science/SCIENTIST_REVIEW_CHECKLIST_v0.7.0.md'
]

describe('markdown fences', () => {
  it('keeps delivery and review markdown fences balanced and clean', () => {
    for (const file of markdownFiles) {
      const text = fs.readFileSync(file, 'utf8')
      const fenceCount = text.split('```').length - 1

      expect(fenceCount, `${file} has unbalanced markdown fences`).toBeGreaterThanOrEqual(0)
      expect(fenceCount % 2, `${file} has unbalanced markdown fences`).toBe(0)
      expect(text).not.toContain('```text id=')
      expect(text).not.toContain('```bash id=')
    }
  })
})
