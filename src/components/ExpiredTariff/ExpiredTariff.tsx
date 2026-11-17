import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import { Button } from '../Button/Button'
import styles from './ExpiredTariff.module.scss'

import card from '../../assets/icons/card.svg'
import { Colors } from '../../types/colors'

export interface ExpiredTariffProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ExpiredTariff = ({ className }: ExpiredTariffProps) => {
  const { t } = useTranslation()

  return (
    <div className={clsx(styles.expiredTariff, className)}>
      <span className={styles.title}>{t('Ваш тариф истек')}</span>
      <Button variant={Colors.Red} className={styles.button}>
        <ReactSVG src={card} />
        {t('Перейти к оплате')}
      </Button>
    </div>
  )
}
