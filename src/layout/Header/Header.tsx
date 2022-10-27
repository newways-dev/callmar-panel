import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components'
import styles from './Header.module.scss'

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.wrapper}>
        <div className={styles.account}>
          <span className={styles.email}>Вы вошли как groupsh@yandex.ru </span>
          <Link to="/login">
            <Button className={styles.button}>Выйти</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
