import { useTranslation } from 'react-i18next'
import { Button, Heading, Select, SelectCalendar } from '../../components'
import { SelectWrapper } from '../../components/SelectWrapper/SelectWrapper'
import { StatisticsTable } from '../../page-components'
import styles from './Statistics.module.scss'

export const Statistics = () => {
  const { t } = useTranslation()
  const options = [t('Все виджеты')]

  return (
    <div className={styles.statistics}>
      <Heading heading={t('Статистика')} />
      <div className={styles.buttons}>
        <SelectCalendar />
        <Button className={styles.button}>{t('По дням')}</Button>
        <SelectWrapper variant="purple">
          <Select options={options} />
        </SelectWrapper>
      </div>
      <StatisticsTable className={styles.table} />
    </div>
  )
}
