import clsx from 'clsx'
import { useState, DetailedHTMLProps, HTMLAttributes } from 'react'
import { SettingsPages } from '../../../types/pages'
import { Button } from '../../Button/Button'
import styles from './SettingsTabs.module.scss'

export interface SettingsTabsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tabs: string[]
  setPage: (page: SettingsPages) => void
}

export const SettingsTabs = ({
  setPage,
  className,
  tabs,
}: SettingsTabsProps) => {
  const [active, setActive] = useState<number>(0)

  const handleSettings = (index: number) => {
    const page: SettingsPages =
      index === 0
        ? 'sales-department'
        : index === 1
        ? 'decor'
        : index === 2
        ? 'behavior'
        : index === 3
        ? 'chat'
        : index === 4
        ? 'call-settings'
        : 'widget-code'

    setActive(index)
    setPage(page)
  }

  return (
    <div className={clsx(styles.settingsTabs, className)}>
      {tabs.map((tab, index) => (
        <Button
          className={clsx(styles.settingsTab, {
            [styles.settingsTabActive]: active === index,
          })}
          onClick={() => handleSettings(index)}
          key={index}
        >
          {tab}
        </Button>
      ))}
    </div>
  )
}
