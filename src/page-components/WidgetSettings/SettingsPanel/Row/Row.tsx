import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import styles from './Row.module.scss'

export interface RowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  children: ReactNode
}

export const Row = ({ children, className, title }: RowProps) => {
  return (
    <div className={clsx(styles.row, className)}>
      <div className={styles.left}>{title}</div>
      <div className={styles.right}>{children}</div>
    </div>
  )
}
