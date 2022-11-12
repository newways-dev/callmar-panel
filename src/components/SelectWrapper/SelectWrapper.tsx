import clsx from 'clsx'
import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './SelectWrapper.module.scss'

export interface SelectWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant: 'purple' | 'gray'
  children: ReactNode
}

export const SelectWrapper = ({
  children,
  variant,
  className,
}: SelectWrapperProps) => {
  switch (variant) {
    case 'gray':
      return (
        <div className={clsx(styles.selectWrapper, styles.gray, className)}>
          {children}
        </div>
      )
    case 'purple':
      return (
        <div className={clsx(styles.selectWrapper, styles.purple, className)}>
          {children}
        </div>
      )
    default:
      return <></>
  }
}
