import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import styles from './Cell.module.scss'

export interface CellProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}

export const Cell = ({ children, className }: CellProps) => {
  return <div className={clsx(styles.cell, className)}>{children}</div>
}
