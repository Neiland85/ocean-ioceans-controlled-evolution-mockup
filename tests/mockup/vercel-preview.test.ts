import fs from 'node:fs'
import { describe, expect, it } from 'vitest'

type VercelConfig = {
  framework?: string
  buildCommand?: string
  outputDirectory?: string
  name?: string
  version?: number
}

describe('Vercel live preview', () => {
  it('keeps a client-facing Vercel preview target without requiring GitHub Pages', () => {
    const viteConfig = fs.readFileSync('vite.config.ts', 'utf8')
    const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8')) as VercelConfig
    const previewDoc = fs.readFileSync('docs/client-package/10_EXPORT_CLIENTE/LIVE_PREVIEW_v0.7.9.md', 'utf8')
    const clientReadme = fs.readFileSync('docs/client-package/README.md', 'utf8')
    const text = `${viteConfig}\n${JSON.stringify(vercelConfig)}\n${previewDoc}\n${clientReadme}`

    expect(viteConfig).not.toContain("base: '/ocean-ioceans-controlled-evolution-mockup/'")
    expect(vercelConfig.framework).toBe('vite')
    expect(vercelConfig.buildCommand).toBe('npm run check:all')
    expect(vercelConfig.outputDirectory).toBe('dist')
    expect(text).toContain('Open the live preview first')
    expect(text).toContain('Do not start with the repository')
    expect(text).toContain('It does not connect to real Mr.Wolf systems')
    expect(fs.existsSync('.github/workflows/pages.yml')).toBe(false)
  })
})
