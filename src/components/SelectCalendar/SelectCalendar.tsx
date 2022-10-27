import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ReactSVG } from 'react-svg'
import styles from './SelectCalendar.module.scss'
import calendar from '../../assets/icons/calendar.svg'

export interface SelectCalendarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const SelectCalendar = ({ className }: SelectCalendarProps) => {
  return (
    <div className={clsx(styles.selectCalendar, className)}>
      <ReactSVG src={calendar} />
      <span>23 Декабрь, 2021</span>
    </div>
  )
}
