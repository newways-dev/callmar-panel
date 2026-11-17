import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import { Button, Select, SelectCalendar, Tabs } from '../../components'
import { CallsTable, Heading } from '../../page-components'
import {
  ALL_WIDGETS,
  CallPeriod,
  demoWidgets,
  filterCalls,
  getDemoCalls,
} from '../../helpers/demoData'

import styles from './Calls.module.scss'
import reset from '../../assets/icons/reset.svg'
import { SelectWrapper } from '../../components/SelectWrapper/SelectWrapper'

const PERIODS: CallPeriod[] = ['today', 'yesterday', 'week']

export const Calls = () => {
  const { t } = useTranslation()
  const [period, setPeriod] = useState<CallPeriod>('today')
  const [site, setSite] = useState<string>(ALL_WIDGETS)

  const tabs = [t('Сегодня'), t('Вчера'), t('Неделя')]
  const siteOptions = [
    { value: ALL_WIDGETS, label: t('Все виджеты') },
    ...demoWidgets.map((widget) => ({ value: widget.site, label: widget.site })),
  ]

  const allCalls = useMemo(() => getDemoCalls(), [])
  const calls = filterCalls(allCalls, period, site)

  return (
    <div className={styles.calls}>
      <Heading heading={t('Звонки')}>
        <div className={styles.buttons}>
          <SelectCalendar className={styles.calendar} />
          <Tabs
            className={styles.tabs}
            tabs={tabs}
            onChange={(index) => setPeriod(PERIODS[index])}
          />
          <div className={styles.divider}>
            <Button className={styles.reset}>
              <ReactSVG src={reset} />
            </Button>
            <SelectWrapper variant="purple">
              <Select
                options={siteOptions}
                value={site}
                onChange={(event) => setSite(event.target.value)}
                className={styles.select}
              />
            </SelectWrapper>
          </div>
        </div>
      </Heading>
      <CallsTable className={styles.table} calls={calls} />
    </div>
  )
}
