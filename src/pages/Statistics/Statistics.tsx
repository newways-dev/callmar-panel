import { Button, Heading, Select, SelectCalendar } from '../../components'
import { SelectWrapper } from '../../components/SelectWrapper/SelectWrapper'
import { StatisticsTable } from '../../page-components'
import styles from './Statistics.module.scss'

export const Statistics = () => {
  const options = ['Все виджеты']

  return (
    <div className={styles.statistics}>
      <Heading heading="Статистика" />
      <div className={styles.buttons}>
        <SelectCalendar />
        <Button className={styles.button}>По дням</Button>
        <SelectWrapper variant="purple">
          <Select options={options} placeholder="Все виджеты" />
        </SelectWrapper>
      </div>
      <StatisticsTable className={styles.table} />
    </div>
  )
}
