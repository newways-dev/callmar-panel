import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../../components/Button/Button'
import { setPage } from '../../redux/pages/slice'
import { Pages } from '../../types/pages'
import styles from './TimeLeft.module.scss'

export interface TimeLeftProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const TimeLeft = ({ className }: TimeLeftProps) => {
  const dispatch = useDispatch()
  return (
    <div className={clsx(styles.timeWrapper, className)}>
      <div className={styles.timeLeft}>
        <span className={styles.date}>
          Осталось <span> 13 мин.</span> до 12.11.21
        </span>
        <Button
          onClick={() => dispatch(setPage(Pages.Payment))}
          className={styles.timeLeftButton}
        >
          Оплатить
        </Button>
      </div>
    </div>
  )
}
