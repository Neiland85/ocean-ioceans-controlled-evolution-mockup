import fs from 'node:fs'
import { describe, expect, it } from 'vitest'

describe('demo navigation', () => {
  it('keeps a clear clickable navigation path for the recorded demo', () => {
    const app = fs.readFileSync('src/App.vue', 'utf8')
    const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8')) as {
      rewrites?: Array<{ source: string; destination: string }>
    }

    expect(app).toContain('aria-label="Demo navigation"')
    expect(app).toContain('Overview')
    expect(app).toContain('Evidence')
    expect(app).toContain('Internal Tools')
    expect(app).toContain('Opportunities')
    expect(app).toContain('AI Governance')
    expect(app).toContain('Logs')
    expect(app).toContain('Budget')

    expect(app).toContain('to="/"')
    expect(app).toContain('to="/evidence"')
    expect(app).toContain('to="/internal-tools"')
    expect(app).toContain('to="/opportunities"')
    expect(app).toContain('to="/ai-governance"')
    expect(app).toContain('to="/logs"')
    expect(app).toContain('to="/budget"')

    expect(vercel.rewrites).toEqual([
      {
        source: '/(.*)',
        destination: '/'
      }
    ])
  })
})
