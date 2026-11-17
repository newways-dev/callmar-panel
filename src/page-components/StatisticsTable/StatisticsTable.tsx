import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { getDemoStatistics } from '../../helpers/demoData'
import styles from './StatisticsTable.module.scss'

const Chart = () => {
  const { t, i18n } = useTranslation()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => getDemoStatistics(), [i18n.language])

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 5, right: 24, left: 0, bottom: 5 }}>
        <Legend />
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <CartesianGrid stroke="#999" strokeLinecap="square" strokeWidth={1} />
        <Line
          type="monotone"
          dataKey="calls"
          name={t('Звонки')}
          strokeWidth={4}
          stroke="#81D880"
          isAnimationActive={false}
        />
        <Line
          type="monotone"
          dataKey="views"
          name={t('Показы')}
          strokeWidth={4}
          stroke="#D75C78"
          isAnimationActive={false}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )
}

export interface StatisticTableProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const StatisticsTable = ({ className }: StatisticTableProps) => {
  const { t } = useTranslation()

  return (
    <div className={clsx(styles.statisticsTable, className)}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <p className={styles.daysStatTitle}>{t('Сводная статистика по дням')}</p>
          <p className={styles.widgetStatTitle}>{t('по всем виджетам')}</p>
        </div>
        <div className={styles.chart}>
          <Chart />
        </div>
      </div>
    </div>
  )
}
