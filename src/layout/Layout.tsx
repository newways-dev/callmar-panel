import { ReactNode } from 'react'
import { ExpiredTariff } from '../components'
import { MobileHeader } from './MobileHeader/MobileHeader'
import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'

import styles from './Layout.module.scss'
import { TimeLeft } from '../page-components'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={styles.layout}>
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
