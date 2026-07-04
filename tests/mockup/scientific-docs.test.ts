import fs from 'node:fs'
import { describe, expect, it } from 'vitest'

describe('scientific review documents', () => {
  it('keeps scientific review language controlled and non-overclaiming', () => {
    const reviewPack = fs.readFileSync('docs/science/SCIENTIFIC_REVIEW_PACK_v0.7.0.md', 'utf8')
    const checklist = fs.readFileSync('docs/science/SCIENTIST_REVIEW_CHECKLIST_v0.7.0.md', 'utf8')
    const text = `${reviewPack}\n${checklist}`

    expect(text).toContain('Scientific Review Pack')
    expect(text).toContain('Evidence is not a conclusion')
    expect(text).toContain('AI is treated as an assistant, not an authority')
    expect(text).toContain('Do not connect real data until the evidence model is agreed')

    expect(text).not.toMatch(/\bproves\b/i)
    expect(text).not.toMatch(/\bguarantees scientific truth\b/i)
    expect(text).not.toMatch(/\bproduction-ready scientific platform\b/i)
  })
})
