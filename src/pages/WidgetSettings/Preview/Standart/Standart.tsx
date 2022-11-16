import clsx from 'clsx'
import { ReactSVG } from 'react-svg'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Standart.module.scss'

import timerIcon from '../../../../assets/icons/timer.svg'
import close from '../../../../assets/icons/round-close.svg'
import { Button } from '../../../../components'

export interface StandartProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  heading: string
  callSeconds: number
  buttonText: string
  showTimer: boolean
}

export const Standart = ({
  heading,
  callSeconds,
  buttonText,
  showTimer,
  className,
}: StandartProps) => {
  return (
    <div className={clsx(styles.standart, className)}>
      <ReactSVG src={close} />
      <p className={styles.heading}>{heading}</p>
      <p className={styles.text}>
        Хотите, позвоним вам через {callSeconds} секунд?
      </p>
      <div className={styles.actions}>
        <input placeholder='+7' className={styles.input} type='phone' />
        <div className={styles.buttonRight}>
          <Button>{buttonText}</Button>
          <p>Звонок бесплатный</p>
        </div>
      </div>
      {!showTimer && (
        <div className={styles.timer}>
          <ReactSVG src={timerIcon} />
          <span>0:{callSeconds},00</span>
        </div>
      )}
    </div>
  )
}
