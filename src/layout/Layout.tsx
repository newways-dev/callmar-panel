import { ReactNode } from 'react'
import { ExpiredTariff } from '../components'
import { MobileHeader } from './MobileHeader/MobileHeader'
import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'

import styles from './Layout.module.scss'
import { AvatarModal, NewWidgetModal, TimeLeft } from '../page-components'
import { useSelector } from 'react-redux'
import {
  selectAvatarModal,
  selectNewWidgetModal,
} from '../redux/modals/selector'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const newWidget = useSelector(selectNewWidgetModal)
  const avatar = useSelector(selectAvatarModal)

  return (
    <>
      <div className={styles.layout}>
        {newWidget && <NewWidgetModal className={styles.newWidget} />}
        {avatar && <AvatarModal className={styles.avatarModal} />}
        <Sidebar className={styles.sidebar} />
        <Header className={styles.header} />
        <MobileHeader className={styles.mobileHeader} />
        <TimeLeft className={styles.timeLeft} />
        {/* <ExpiredTariff className={styles.tariff} /> */}
        <div className={styles.main}>{children}</div>
      </div>
    </>
  )
}
