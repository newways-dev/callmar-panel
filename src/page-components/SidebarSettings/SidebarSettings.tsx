import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { Buttons } from './Buttons/Buttons'
import { Section } from './Section/Section'
import styles from './SidebarSettings.module.scss'

export interface SidebarSettingsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  children?: ReactNode
}

export const SidebarSettings = ({ title, children }: SidebarSettingsProps) => {
  return (
    <div className={styles.sidebarSettings}>
      <Section title={title} />
      {children}
      <Buttons />
    </div>
  )
}
