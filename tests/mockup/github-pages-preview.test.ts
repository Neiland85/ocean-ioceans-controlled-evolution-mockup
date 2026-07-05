import fs from 'node:fs'
import { describe, expect, it } from 'vitest'

describe('GitHub Pages preview', () => {
  it('keeps a client-facing static preview path configured without changing commercial scope', () => {
    const viteConfig = fs.readFileSync('vite.config.ts', 'utf8')
    const workflow = fs.readFileSync('.github/workflows/pages.yml', 'utf8')
    const previewDoc = fs.readFileSync('docs/client-package/10_EXPORT_CLIENTE/PREVIEW_URL_v0.7.8.md', 'utf8')
    const clientReadme = fs.readFileSync('docs/client-package/README.md', 'utf8')
    const text = `${viteConfig}\n${workflow}\n${previewDoc}\n${clientReadme}`

    expect(text).toContain("base: '/ocean-ioceans-controlled-evolution-mockup/'")
    expect(text).toContain('Deploy static preview to GitHub Pages')
    expect(text).toContain('npm run check:all')
    expect(text).toContain('actions/deploy-pages')
    expect(text).toContain('https://neiland85.github.io/ocean-ioceans-controlled-evolution-mockup/')
    expect(text).toContain('Open the preview URL first')
    expect(text).toContain('Do not start with the repository')
    expect(text).toContain('It does not connect to real Mr.Wolf systems')
  })
})
