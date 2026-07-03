import fs from 'node:fs'
import path from 'node:path'

const roots = ['02_DATA_DEMO', 'src/data']
const errors = []

function walk(dir) {
  if (!fs.existsSync(dir)) return []

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(fullPath)
    return [fullPath]
  })
}

function inspectValue(value, file, currentPath = '$') {
  if (Array.isArray(value)) {
    value.forEach((item, index) => inspectValue(item, file, `${currentPath}[${index}]`))
    return
  }

  if (!value || typeof value !== 'object') {
    if (typeof value === 'string') {
      if (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(value)) {
        errors.push(`Email-like value found in ${file} at ${currentPath}`)
      }

      if (/password|secret|bearer|api_key|client_secret/i.test(value)) {
        errors.push(`Credential-like value found in ${file} at ${currentPath}`)
      }
    }

    return
  }

  if ('id' in value && typeof value.id === 'string' && !value.id.startsWith('DEMO_')) {
    errors.push(`Non-demo id found in ${file} at ${currentPath}: ${value.id}`)
  }

  if ('dataClassification' in value && value.dataClassification !== 'synthetic_demo') {
    errors.push(`Invalid dataClassification in ${file} at ${currentPath}`)
  }

  for (const [key, child] of Object.entries(value)) {
    inspectValue(child, file, `${currentPath}.${key}`)
  }
}

for (const root of roots) {
  for (const file of walk(root).filter((item) => item.endsWith('.json'))) {
    const json = JSON.parse(fs.readFileSync(file, 'utf8'))

    if (json.dataClassification !== 'synthetic_demo') {
      errors.push(`Missing synthetic_demo classification in root of ${file}`)
    }

    inspectValue(json, file)
  }
}

if (errors.length > 0) {
  console.error('\nDemo data validation failed:\n')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log('Demo data validation passed.')

