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
  return (
    <LineChart width={1100} height={300} data={data}>
      <Legend />
      <XAxis dataKey='name' />
      <YAxis />
      <CartesianGrid stroke='#999' strokeLinecap='square' strokeWidth={1} />
      <Line type='monotone' dataKey='Звонки' strokeWidth={4} stroke='#81D880' />
      <Line type='monotone' dataKey='Показы' strokeWidth={4} stroke='#D75C78' />
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
