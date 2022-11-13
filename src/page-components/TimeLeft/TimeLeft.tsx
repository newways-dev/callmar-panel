import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import styles from './TimeLeft.module.scss'

export interface TimeLeftProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const TimeLeft = ({ className }: TimeLeftProps) => {
  return (
    <div className={clsx(styles.timeWrapper, className)}>
      <div className={styles.timeLeft}>
        <span className={styles.date}>
          Осталось <span> 13 мин.</span> до 12.11.21
        </span>
        <Link to="/service-payment">
          <Button className={styles.timeLeftButton}>Оплатить</Button>
        </Link>
      </div>
    </div>
  )
}
