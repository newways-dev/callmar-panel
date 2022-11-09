import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import styles from './Section.module.scss'

export interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  children?: ReactNode
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      {children && children}
    </div>
  )
}
