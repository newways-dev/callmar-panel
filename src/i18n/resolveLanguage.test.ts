import { resolveLanguage } from './index'

describe('resolveLanguage', () => {
  it('defaults to English', () => {
    expect(resolveLanguage('', null)).toBe('en')
  })

  it('uses the saved choice', () => {
    expect(resolveLanguage('', 'ru')).toBe('ru')
    expect(resolveLanguage('', 'en')).toBe('en')
  })

  it('lets a ?lng= link win over the saved choice', () => {
    expect(resolveLanguage('?lng=ru', 'en')).toBe('ru')
    expect(resolveLanguage('?lng=en', 'ru')).toBe('en')
  })

  it('ignores unknown values', () => {
    expect(resolveLanguage('?lng=de', null)).toBe('en')
    expect(resolveLanguage('?lng=de', 'ru')).toBe('ru')
  })
})
