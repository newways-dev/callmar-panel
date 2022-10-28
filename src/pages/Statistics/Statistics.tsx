import { Button, Heading, Select, SelectCalendar } from '../../components'
import styles from './Statistics.module.scss'

export const Statistics = () => {
  return (
    <div className={styles.statistics}>
      <Heading heading="Статистика" />
      <div className={styles.buttons}>
        <SelectCalendar />
        <Button>по дням???</Button>
        <Select placeholder="Все виджеты" />
      </div>
    </div>
  )
}
