import clsx from 'clsx'
import { useState, DetailedHTMLProps, HTMLAttributes } from 'react'
import { Colors } from '../../types/colors'
import { Button } from '../Button/Button'
import styles from './Tabs.module.scss'

export interface TabsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tabs: string[]
}

export const Tabs = ({ tabs, className }: TabsProps) => {
  const [active, setActive] = useState<number>(0)

  return (
    <div className={clsx(styles.tabs, className)}>
      {tabs.map((tab, index) => (
        <Button
          variant={Colors.Purple}
          onClick={() => setActive(index)}
          className={clsx(styles.tab, {
            [styles.active]: active === index,
          })}
          key={index}
        >
          {tab}
        </Button>
      ))}
    </div>
  )
}
