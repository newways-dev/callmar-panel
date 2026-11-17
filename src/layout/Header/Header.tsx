import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button, LanguageSwitcher } from '../../components'
import styles from './Header.module.scss'

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({ className }: HeaderProps) => {
  const { t } = useTranslation()

  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.wrapper}>
        <div className={styles.account}>
          <LanguageSwitcher />
          <span className={styles.email}>
            {t('Вы вошли как')} demo@example.com
          </span>
          <Link to="/login">
            <Button className={styles.button}>{t('Выйти')}</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
