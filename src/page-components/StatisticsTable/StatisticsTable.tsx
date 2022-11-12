import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'
import useWindowSize from '../../hooks/useWindowSize'
import styles from './StatisticsTable.module.scss'

const data = [
  {
    name: '18.12',
    Звонки: 2,
    Показы: 3,
    amt: 5,
  },
  {
    name: '19.12',
    Звонки: 3,
    Показы: 3,
    amt: 2210,
  },
  {
    name: '20.12',
    Звонки: 4,
    Показы: 5,
    amt: 100,
  },
  {
    name: '21.12',
    Звонки: 5,
    Показы: 5,
    amt: 100,
  },
  {
    name: '22.12',
    Звонки: 6,
    Показы: 4,
    amt: 100,
  },
  {
    name: '23.12',
    Звонки: 7,
    Показы: 3,
    amt: 100,
  },
]

const Chart = () => {
  const width = useWindowSize()

  const chartWidth =
    width && width > 2300
      ? 2000
      : width && width > 1800
      ? 1500
      : width && width > 1400
      ? 1300
      : width && width < 800
      ? 600
      : 1100

  return (
    <LineChart width={chartWidth} height={400} data={data}>
      <Legend />
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#999" strokeLinecap="square" strokeWidth={1} />
      <Line type="monotone" dataKey="Звонки" strokeWidth={4} stroke="#81D880" />
      <Line type="monotone" dataKey="Показы" strokeWidth={4} stroke="#D75C78" />
      <Tooltip />
    </LineChart>
  )
}

export interface StatisticTableProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const StatisticsTable = ({ className }: StatisticTableProps) => {
  return (
    <div className={clsx(styles.statisticsTable, className)}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <p className={styles.daysStatTitle}>Сводная статистика по дням</p>
          <p className={styles.widgetStatTitle}>по всем виджетам</p>
        </div>
        <div className={styles.chart}>
          <Chart />
        </div>
      </div>
    </div>
  )
}
