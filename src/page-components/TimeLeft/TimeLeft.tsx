import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { formatDate } from '../../helpers/demoData'
import styles from './TimeLeft.module.scss'

export interface TimeLeftProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const DEMO_DAYS_LEFT = 13

export const TimeLeft = ({ className }: TimeLeftProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const expires = new Date()
  expires.setDate(expires.getDate() + DEMO_DAYS_LEFT)

  return (
    <div className={clsx(styles.timeWrapper, className)}>
      <div className={styles.timeLeft}>
        <span className={styles.date}>
          {t('Осталось')} <span>{t('{{days}} дн.', { days: DEMO_DAYS_LEFT })}</span>{' '}
          {t('до {{date}}', { date: formatDate(expires) })}
        </span>
        <Button
          onClick={() => navigate('/payment')}
          className={styles.timeLeftButton}
        >
          {t('Оплатить')}
        </Button>
      </div>
    </div>
  )
}
