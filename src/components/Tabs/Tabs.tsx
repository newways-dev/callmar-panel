import clsx from 'clsx'
import { useState, DetailedHTMLProps, HTMLAttributes } from 'react'
import { Colors } from '../../types/colors'
import { Button } from '../Button/Button'
import styles from './Tabs.module.scss'

export interface TabsProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'onChange'
  > {
  tabs: string[]
  onChange?: (index: number) => void
}

export const Tabs = ({ tabs, onChange, className }: TabsProps) => {
  const [active, setActive] = useState<number>(0)

  const select = (index: number) => {
    setActive(index)
    onChange?.(index)
  }

  return (
    <div className={clsx(styles.tabs, className)}>
      {tabs.map((tab, index) => (
        <Button
          variant={Colors.Purple}
          onClick={() => select(index)}
          className={clsx(styles.tab, {
            [styles.active]: active === index,
          })}
          key={tab}
        >
          {tab}
        </Button>
      ))}
    </div>
  )
}
