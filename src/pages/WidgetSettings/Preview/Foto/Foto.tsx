import clsx from 'clsx'
import { ReactSVG } from 'react-svg'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

  return (
    <div className={clsx(styles.foto, className)}>
      <div className={styles.image}>
        <img src={foto} alt='' />
        <p className={styles.name}>{t('Дима Алексеев')}</p>
        <p>{t('Отдел продаж')}</p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.heading}>{heading}</p>
        <p className={styles.text}>
          {t('Хотите, позвоним вам через {{seconds}} секунд?', {
          seconds: callSeconds,
        })}
        </p>
        <div className={styles.actions}>
          <input placeholder='+7' className={styles.input} type='tel' />
          <div className={styles.buttonRight}>
            <Button>{buttonText}</Button>
            <p>{t('Звонок бесплатный')}</p>
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
