import { getLocale } from '../i18n'

/**
 * Demo data for the frontend-only build.
 * Everything is generated relative to "now", so the dashboard never shows stale dates.
 */

export type CallPeriod = 'today' | 'yesterday' | 'week'

export interface DemoCall {
  id: number
  site: string
  date: Date
  clientPhone: string
  managerPhone: string
}

export interface DemoWidget {
  id: string
  site: string
  installed: boolean
  enabled: boolean
}

/** Internal value of the "all widgets" filter; the visible label is translated. */
export const ALL_WIDGETS = 'all'

export const demoWidgets: DemoWidget[] = [
  { id: 'shop', site: 'example-shop.com', installed: true, enabled: true },
  { id: 'store', site: 'demo-store.org', installed: false, enabled: false },
]

const MANAGER_PHONE = '+7 (495) 000-00-00'

const at = (now: Date, daysAgo: number, hours: number, minutes: number) => {
  const date = new Date(now)
  date.setDate(date.getDate() - daysAgo)
  date.setHours(hours, minutes, 0, 0)
  return date
}

export const getDemoCalls = (now: Date = new Date()): DemoCall[] => {
  const calls = [
    { site: 'example-shop.com', daysAgo: 0, h: 9, m: 41, phone: '+7 (900) 000-00-01' },
    { site: 'demo-store.org', daysAgo: 0, h: 11, m: 5, phone: '+7 (900) 000-00-02' },
    { site: 'example-shop.com', daysAgo: 0, h: 13, m: 27, phone: '+7 (900) 000-00-03' },
    { site: 'example-shop.com', daysAgo: 1, h: 10, m: 12, phone: '+7 (900) 000-00-04' },
    { site: 'demo-store.org', daysAgo: 1, h: 15, m: 48, phone: '+7 (900) 000-00-05' },
    { site: 'example-shop.com', daysAgo: 3, h: 12, m: 30, phone: '+7 (900) 000-00-06' },
    { site: 'demo-store.org', daysAgo: 4, h: 17, m: 3, phone: '+7 (900) 000-00-07' },
    { site: 'example-shop.com', daysAgo: 6, h: 9, m: 55, phone: '+7 (900) 000-00-08' },
  ]

  return calls.map((call, index) => ({
    id: index + 1,
    site: call.site,
    date: at(now, call.daysAgo, call.h, call.m),
    clientPhone: call.phone,
    managerPhone: MANAGER_PHONE,
  }))
}

const startOfDay = (date: Date) => {
  const copy = new Date(date)
  copy.setHours(0, 0, 0, 0)
  return copy
}

const DAY = 24 * 60 * 60 * 1000

export const filterCalls = (
  calls: DemoCall[],
  period: CallPeriod,
  site: string,
  now: Date = new Date()
): DemoCall[] => {
  const today = startOfDay(now).getTime()

  return calls.filter((call) => {
    if (site !== ALL_WIDGETS && call.site !== site) return false

    const day = startOfDay(call.date).getTime()

    switch (period) {
      case 'today':
        return day === today
      case 'yesterday':
        return day === today - DAY
      case 'week':
        return day > today - 7 * DAY && day <= today
      default:
        return false
    }
  })
}

export const getDemoStatistics = (
  now: Date = new Date(),
  locale: string = getLocale()
) => {
  const calls = [2, 3, 4, 5, 6, 7]
  const views = [3, 3, 5, 5, 4, 3]

  return calls.map((value, index) => {
    const date = new Date(now)
    date.setDate(date.getDate() - (calls.length - 1 - index))

    return {
      name: date.toLocaleDateString(locale, {
        day: '2-digit',
        month: '2-digit',
      }),
      calls: value,
      views: views[index],
    }
  })
}

export const formatDate = (date: Date, locale: string = getLocale()) =>
  date.toLocaleDateString(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

export const formatTime = (date: Date, locale: string = getLocale()) =>
  date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })

export const formatLongDate = (date: Date, locale: string = getLocale()) =>
  `${date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
  })}, ${date.getFullYear()}`
