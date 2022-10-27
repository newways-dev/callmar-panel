import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Sidebar.module.scss'

import logo from '../../assets/images/logo.png'
import { Button } from '../../components'
import { setPage } from '../../redux/pages/slice'
import { Pages } from '../../types/pages'
import { useDispatch, useSelector } from 'react-redux'
import { selectPages } from '../../redux/pages/selector'

export interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  mobile?: boolean
}

export const Sidebar = ({ mobile, className }: SidebarProps) => {
  const { page } = useSelector(selectPages)
  const dispatch = useDispatch()

  return (
    <div className={clsx(styles.sidebar, className)}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.buttons}>
        <Button
          onClick={() => dispatch(setPage(Pages.Calls))}
          className={clsx(styles.button, { [styles.active]: page === 'calls' })}
        >
          Звонки
        </Button>
        {!mobile && (
          <Button
            onClick={() => dispatch(setPage(Pages.Widgets))}
            className={clsx(styles.button, {
              [styles.active]: page === 'widgets',
            })}
          >
            Виджеты
          </Button>
        )}
        <Button
          onClick={() => dispatch(setPage(Pages.Statistics))}
          className={clsx(styles.button, {
            [styles.active]: page === 'statistics',
          })}
        >
          Статистика
        </Button>
      </div>
    </div>
  )
}
