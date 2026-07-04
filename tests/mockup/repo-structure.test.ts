import fs from 'node:fs'
import { describe, expect, it } from 'vitest'

const clientPackageDirs = [
  '00_LEER_PRIMERO',
  '01_DOCUMENTOS_BASE',
  '02_DATA_DEMO',
  '03_PANTALLAS',
  '04_COMPONENTES',
  '05_HERRAMIENTAS_INTERNAS_DEMO',
  '06_IA_GOBERNADA_DEMO',
  '07_OFERTAS_PROPUESTAS_DEMO',
  '08_LOGS_Y_ESTADOS',
  '09_GUION_DEMO',
  '10_EXPORT_CLIENTE'
]

const rootMovedDirs = [
  ...clientPackageDirs,
  '99_INTERNO_NO_ENVIAR'
]

describe('repository structure', () => {
  it('keeps client package material out of repository root', () => {
    for (const dir of rootMovedDirs) {
      expect(fs.existsSync(dir), `${dir} should not exist at repository root`).toBe(false)
    }

    for (const dir of clientPackageDirs) {
      expect(fs.existsSync(`docs/client-package/${dir}`), `${dir} should live under docs/client-package`).toBe(true)
    }

    expect(fs.existsSync('docs/internal/99_INTERNO_NO_ENVIAR')).toBe(true)
  })
})
