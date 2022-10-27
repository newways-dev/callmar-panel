import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ReactSVG } from 'react-svg'
import { Button } from '../Button/Button'
import styles from './ExpiredTariff.module.scss'

import card from '../../assets/icons/card.svg'
import { Colors } from '../../types/colors'

export interface ExpiredTariffProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ExpiredTariff = ({ className }: ExpiredTariffProps) => {
  return (
    <div className={clsx(styles.expiredTariff, className)}>
      <span className={styles.title}>Ваш тариф истек</span>
      <Button variant={Colors.Red} className={styles.button}>
        <ReactSVG src={card} />
        Перейти к оплате
      </Button>
    </div>
  )
}
