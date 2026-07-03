import fs from 'node:fs'
import path from 'node:path'

const roots = ['src', '02_DATA_DEMO', '10_EXPORT_CLIENTE']

const dangerousFileExtensions = ['.eml', '.msg', '.pem', '.key', '.p12', '.pfx', '.crt', '.cer', '.zip', '.html', '.htm']

const dangerousPatterns = [
  /password\s*[:=]/i,
  /secret\s*[:=]/i,
  /bearer\s+[a-z0-9._-]+/i,
  /api[_-]?key\s*[:=]/i,
  /client[_-]?secret\s*[:=]/i,
  /private key/i,
  /-----BEGIN/i,
  /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
]

const errors = []

function walk(dir) {
  if (!fs.existsSync(dir)) return []

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(fullPath)
    return [fullPath]
  })
}

for (const root of roots) {
  for (const file of walk(root)) {
    const ext = path.extname(file).toLowerCase()

    if (dangerousFileExtensions.includes(ext)) {
      errors.push(`Forbidden file extension: ${file}`)
      continue
    }

    const stat = fs.statSync(file)
    if (stat.size > 1024 * 1024) continue

    const text = fs.readFileSync(file, 'utf8')

    for (const pattern of dangerousPatterns) {
      if (pattern.test(text)) {
        errors.push(`Sensitive pattern detected in: ${file}`)
      }
    }
  }
}

if (errors.length > 0) {
  console.error('\nSensitive material check failed:\n')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log('Sensitive material check passed.')

