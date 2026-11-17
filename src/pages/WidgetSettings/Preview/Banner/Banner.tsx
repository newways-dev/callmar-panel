import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Banner.module.scss'

import timerIcon from '../../../../assets/icons/timer.svg'
import { Button } from '../../../../components'
import { ReactSVG } from 'react-svg'
import clsx from 'clsx'

import banner from '../../../../assets/images/banner.png'

export interface BannerProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  heading: string
  callSeconds: number
  buttonText: string
  showTimer: boolean
}

export const Banner = ({
  heading,
  callSeconds,
  buttonText,
  showTimer,
  className,
}: BannerProps) => {
  const { t } = useTranslation()

  return (
    <div className={clsx(styles.banner, className)}>
      <img src={banner} alt='' />
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
        {!showTimer && (
          <div className={styles.timer}>
            <ReactSVG src={timerIcon} />
            <span>0:{callSeconds},00</span>
          </div>
        )}
      </div>
    </div>
  )
}
