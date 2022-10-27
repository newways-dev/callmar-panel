import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import styles from './Heading.module.scss'

export interface HeadingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: ReactNode
  children?: ReactNode
}

export const Heading = ({ heading, className, children }: HeadingProps) => {
  return (
    <div className={clsx(styles.headingWrapper, className)}>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.wrapper}>{children}</div>
    </div>
  )
}
