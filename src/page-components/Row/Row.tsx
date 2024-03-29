import clsx from 'clsx'
import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Row.module.scss'

export interface RowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  table: 'calls' | 'widgets' | 'work-time'
  children: ReactNode
}

export const Row = ({ children, table, className }: RowProps) => {
  switch (table) {
    case 'calls':
      return <div className={clsx(styles.callsRow, className)}>{children}</div>
    case 'widgets':
      return (
        <div className={clsx(styles.widgetsCells, className)}>{children}</div>
      )
    case 'work-time':
      return (
        <div className={clsx(styles.workTimeRow, className)}>{children}</div>
      )

    default:
      return <></>
  }
}
