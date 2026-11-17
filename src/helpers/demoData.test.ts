import {
  ALL_WIDGETS,
  filterCalls,
  getDemoCalls,
  getDemoStatistics,
} from './demoData'

// 17 Nov 2026, 14:00: any fixed date works, the demo data is relative to it
const NOW = new Date(2026, 10, 17, 14, 0)
const calls = getDemoCalls(NOW)

describe('filterCalls', () => {
  it('shows only today\'s calls on the "today" tab', () => {
    expect(filterCalls(calls, 'today', ALL_WIDGETS, NOW)).toHaveLength(3)
  })

  it('shows only yesterday\'s calls on the "yesterday" tab', () => {
    expect(filterCalls(calls, 'yesterday', ALL_WIDGETS, NOW)).toHaveLength(2)
  })

  it('shows the last seven days on the "week" tab', () => {
    expect(filterCalls(calls, 'week', ALL_WIDGETS, NOW)).toHaveLength(8)
  })

  it('combines the period with the site filter', () => {
    const result = filterCalls(calls, 'week', 'demo-store.org', NOW)

    expect(result).toHaveLength(3)
    expect(result.every((call) => call.site === 'demo-store.org')).toBe(true)
  })

  it('returns an empty list when nothing matches', () => {
    expect(filterCalls(calls, 'today', 'unknown.example', NOW)).toEqual([])
  })
})

describe('getDemoStatistics', () => {
  it('ends with today and covers six days', () => {
    const stats = getDemoStatistics(NOW, 'ru-RU')

    expect(stats).toHaveLength(6)
    expect(stats[stats.length - 1].name).toBe('17.11')
    expect(stats[0].name).toBe('12.11')
  })

  it('formats the day labels for the requested locale', () => {
    const stats = getDemoStatistics(NOW, 'en-GB')

    expect(stats[stats.length - 1].name).toBe('17/11')
  })
})
