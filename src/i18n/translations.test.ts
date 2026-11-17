import fs from 'fs'
import path from 'path'
import en from './locales'

const SRC = path.resolve(__dirname, '..')
const CYRILLIC = /[А-Яа-яЁё]/

const listSourceFiles = (dir: string): string[] =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)

    if (entry.isDirectory()) return listSourceFiles(full)
    if (!/\.(ts|tsx)$/.test(entry.name)) return []
    if (/\.test\.(ts|tsx)$/.test(entry.name) || entry.name.endsWith('.d.ts'))
      return []
    if (full.startsWith(path.join(SRC, 'i18n'))) return []

    return [full]
  })

// t('...') calls, including strings that continue over several lines
const T_CALL = /\bt\(\s*(['"`])((?:\\.|(?!\1)[^\\])*)\1/g

const unescape = (text: string, quote: string) =>
  text.replace(new RegExp(`\\\\${quote}`, 'g'), quote)

const files = listSourceFiles(SRC).map((file) => ({
  file: path.relative(SRC, file),
  content: fs.readFileSync(file, 'utf8'),
}))

const usedKeys = new Set<string>()
const missing: string[] = []
const untranslatedText: string[] = []

for (const { file, content } of files) {
  for (const match of Array.from(content.matchAll(T_CALL))) {
    const key = unescape(match[2], match[1])
    usedKeys.add(key)
    if (CYRILLIC.test(key) && !(key in en)) missing.push(`${file}: ${key}`)
  }

  // Russian text that is not passed through t(): comments are ignored
  const withoutCalls = content
    .replace(T_CALL, 't()')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|\s)\/\/.*$/gm, '')

  withoutCalls.split('\n').forEach((line, index) => {
    if (CYRILLIC.test(line)) untranslatedText.push(`${file}:${index + 1}: ${line.trim()}`)
  })
}

const placeholders = (text: string) =>
  (text.match(/\{\{\s*\w+\s*\}\}/g) || []).map((p) => p.replace(/\s/g, '')).sort()

describe('English translations', () => {
  it('cover every Russian text used with t()', () => {
    expect(missing).toEqual([])
  })

  it('leave no Russian text in the code outside t()', () => {
    expect(untranslatedText).toEqual([])
  })

  it('have no entries that the code does not use (typo guard)', () => {
    const unused = Object.keys(en).filter((key) => !usedKeys.has(key))

    expect(unused).toEqual([])
  })

  it('are real English: not empty and without Cyrillic', () => {
    const broken = Object.entries(en)
      .filter(([, value]) => !value.trim() || CYRILLIC.test(value))
      .map(([key]) => key)

    expect(broken).toEqual([])
  })

  it('keep the same {{placeholders}} as the source text', () => {
    const mismatched = Object.entries(en)
      .filter(([key, value]) => placeholders(key).join() !== placeholders(value).join())
      .map(([key]) => key)

    expect(mismatched).toEqual([])
  })
})
