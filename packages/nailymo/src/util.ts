import fs from 'node:fs'
import path from 'node:path'

export function copyDirectorySync(src: string, dest: string) {
  if (!fs.existsSync(dest))
    fs.mkdirSync(dest, { recursive: true })

  const entries = fs.readdirSync(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory())
      copyDirectorySync(srcPath, destPath)
    else
      fs.copyFileSync(srcPath, destPath)
  }
}
