import clsx from 'clsx'
import { ReactSVG } from 'react-svg'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Foto.module.scss'

import timerIcon from '../../../../assets/icons/timer.svg'
import foto from '../../../../assets/images/foto.png'
import { Button } from '../../../../components'

export interface FotoProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  heading: string
  callSeconds: number
  buttonText: string
  showTimer: boolean
}

export const Foto = ({
  heading,
  callSeconds,
  buttonText,
  showTimer,
  className,
}: FotoProps) => {
  return (
    <div className={clsx(styles.foto, className)}>
      <div className={styles.image}>
        <img src={foto} alt='' />
        <p className={styles.name}>Дима Алексеев</p>
        <p>Отдел продаж</p>
      </div>
      <div className={styles.wrapper}>
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
