import { Button, Heading, Select, SelectCalendar } from '../../components'
import { StatisticsTable } from '../../page-components'
import styles from './Statistics.module.scss'

export const Statistics = () => {
  const options = ['one']

  return (
    <div className={styles.statistics}>
      <Heading heading='Статистика' />
      <div className={styles.buttons}>
        <SelectCalendar />
        <Button className={styles.button}>По дням</Button>
        <Select variant='purple' options={options} placeholder='Все виджеты' />
      </div>
      <StatisticsTable className={styles.table} />
    </div>
  )
}
