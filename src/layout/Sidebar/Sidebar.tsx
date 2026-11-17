import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Sidebar.module.scss'

import logo from '../../assets/images/logo.png'
import { Button } from '../../components'

export interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  mobile?: boolean
}

export const Sidebar = ({ mobile, className }: SidebarProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isActive = (path: string) => pathname.startsWith(path)

  return (
    <div className={clsx(styles.sidebar, className)}>
      <div className={styles.logo}>
        <img src={logo} alt="Callmar" />
      </div>
      <div className={styles.buttons}>
        <Button
          onClick={() => navigate('/calls')}
          className={clsx(styles.button, { [styles.active]: isActive('/calls') })}
        >
          {t('Звонки')}
        </Button>
        {!mobile && (
          <Button
            onClick={() => navigate('/widgets')}
            className={clsx(styles.button, {
              [styles.active]: isActive('/widgets'),
            })}
          >
            {t('Виджеты')}
          </Button>
        )}
        <Button
          onClick={() => navigate('/statistics')}
          className={clsx(styles.button, {
            [styles.active]: isActive('/statistics'),
          })}
        >
          {t('Статистика')}
        </Button>
      </div>
    </div>
  )
}
