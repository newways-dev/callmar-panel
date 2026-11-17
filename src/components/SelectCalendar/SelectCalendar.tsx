import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import { formatLongDate } from '../../helpers/demoData'
import styles from './SelectCalendar.module.scss'
import calendar from '../../assets/icons/calendar.svg'

export interface SelectCalendarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const SelectCalendar = ({ className }: SelectCalendarProps) => {
  // subscribes to language changes so the date is re-formatted
  useTranslation()

  return (
    <div className={clsx(styles.selectCalendar, className)}>
      <ReactSVG src={calendar} />
      <span>{formatLongDate(new Date())}</span>
    </div>
  )
}
