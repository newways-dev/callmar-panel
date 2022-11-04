import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
import styles from './StatisticsTable.module.scss'

const data = [
  {
    name: '18.12',
    uv: 2,
    pv: 3,
    amt: 5,
  },
  {
    name: '19.12',
    uv: 3,
    pv: 3,
    amt: 2210,
  },
  {
    name: '20.12',
    uv: 4,
    pv: 5,
    amt: 100,
  },
  {
    name: '21.12',
    uv: 5,
    pv: 5,
    amt: 100,
  },
  {
    name: '22.12',
    uv: 6,
    pv: 4,
    amt: 100,
  },
  {
    name: '23.12',
    uv: 7,
    pv: 3,
    amt: 100,
  },
]

const Chart = () => {
  return (
    <LineChart width={1100} height={300} data={data}>
      <XAxis dataKey='name' />
      <YAxis />
      <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
      <Line type='monotone' dataKey='uv' stroke='#81D880' />
      <Line type='monotone' dataKey='pv' stroke='#D75C78' />
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
