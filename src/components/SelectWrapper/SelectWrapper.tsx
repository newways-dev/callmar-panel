import clsx from 'clsx'
import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './SelectWrapper.module.scss'

export interface SelectWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant: 'purple' | 'gray' | 'red'
  children: ReactNode
}

export const SelectWrapper = ({
  children,
  variant,
  className,
}: SelectWrapperProps) => {
  switch (variant) {
    case 'gray':
      return <div className={clsx(styles.gray, className)}>{children}</div>
    case 'purple':
      return <div className={clsx(styles.purple, className)}>{children}</div>
    case 'red':
      return <div className={clsx(styles.red, className)}>{children}</div>
    default:
      return <></>
  }
}
