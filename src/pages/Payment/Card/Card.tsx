import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Card.module.scss'

export interface CardProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string
  time: string
  price: string
  discount: string
}

export const Card = ({
  title,
  className,
  time,
  price,
  discount,
}: CardProps) => {
  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.wrapper}>
        <p>{time}</p>
        <p>{price}</p>
        <p className={styles.discount}>{discount}</p>
        <div className={styles.lineWrapper}>
          <div className={styles.line} />
        </div>
      </div>
    </div>
  )
}
