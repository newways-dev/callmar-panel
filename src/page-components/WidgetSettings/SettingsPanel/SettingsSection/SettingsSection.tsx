import clsx from 'clsx'
import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './SettingsSection.module.scss'

export interface SettingsSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  description: ReactNode
  children: ReactNode
}

export const SettingsSection = ({
  title,
  description,
  children,
  className,
}: SettingsSectionProps) => {
  return (
    <div className={clsx(styles.settingsSection, className)}>
      <p className={styles.title}>{title}</p>
      <div className={styles.divider} />
      <p className={styles.description}>{description}</p>
      <div className={styles.settingsWrapper}>{children}</div>
    </div>
  )
}
