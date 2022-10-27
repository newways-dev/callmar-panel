import { ReactSVG } from 'react-svg'
import { Button, Select, SelectCalendar, Tabs } from '../../components'
import { CallsTable, Heading } from '../../page-components'

import styles from './Calls.module.scss'
import reset from '../../assets/icons/reset.svg'

export const Calls = () => {
  const tabs = ['Сегодня', 'Вчера', 'Неделя']

  return (
    <div className={styles.calls}>
      <Heading heading="Звонки">
        <div className={styles.buttons}>
          <SelectCalendar className={styles.calendar} />
          <Tabs className={styles.tabs} tabs={tabs} />
          <div className={styles.divider}>
            <Button className={styles.reset}>
              <ReactSVG src={reset} />
            </Button>
            <Select className={styles.select} placeholder="Все виджеты" />
          </div>
        </div>
      </Heading>
      <CallsTable className={styles.table} />
    </div>
  )
}
