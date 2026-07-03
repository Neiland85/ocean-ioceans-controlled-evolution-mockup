import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

const demoDataDir = path.resolve('02_DATA_DEMO')

function walkJsonFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      return walkJsonFiles(fullPath)
    }

    return fullPath.endsWith('.json') ? [fullPath] : []
  })
}

function inspect(value: unknown, errors: string[], currentPath: string): void {
  if (Array.isArray(value)) {
    value.forEach((item, index) => inspect(item, errors, `${currentPath}[${index}]`))
    return
  }

  if (!value || typeof value !== 'object') {
    if (typeof value === 'string') {
      if (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(value)) {
        errors.push(`Email-like value at ${currentPath}`)
      }

      if (/password|secret|bearer|api_key|client_secret|-----BEGIN|<html|<!doctype/i.test(value)) {
        errors.push(`Forbidden value at ${currentPath}`)
      }
    }

    return
  }

  for (const [key, child] of Object.entries(value)) {
    if (key.toLowerCase().includes('id') && typeof child === 'string') {
      expect(child.startsWith('DEMO_')).toBe(true)
    }

    inspect(child, errors, `${currentPath}.${key}`)
  }
}

describe('demo data fixtures', () => {
  it('uses synthetic demo classification and avoids sensitive material', () => {
    const files = walkJsonFiles(demoDataDir)
    expect(files.length).toBeGreaterThan(0)

    const errors: string[] = []

    for (const file of files) {
      const json = JSON.parse(fs.readFileSync(file, 'utf8'))

      expect(json.dataClassification).toBe('synthetic_demo')
      inspect(json, errors, path.relative(process.cwd(), file))
    }

    expect(errors).toEqual([])
  })
})
