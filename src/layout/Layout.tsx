import { Outlet } from 'react-router-dom'
import { MobileHeader } from './MobileHeader/MobileHeader'
import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'

import styles from './Layout.module.scss'
import { AvatarModal, Modal, TimeLeft } from '../page-components'
import { useSelector } from 'react-redux'
import {
  selectAvatarModal,
  selectNewWidgetModal,
  selectOperatorDataModal,
  selectOperatorPaymentModal,
} from '../redux/modals/selector'

export const AppLayout = () => {
  const newWidget = useSelector(selectNewWidgetModal)
  const operatorData = useSelector(selectOperatorDataModal)
  const operatorPayment = useSelector(selectOperatorPaymentModal)
  const avatar = useSelector(selectAvatarModal)

  return (
    <div className={styles.layout}>
      {newWidget && <Modal modal="new-widget" />}
      {operatorData && <Modal modal="operator-data" />}
      {operatorPayment && <Modal modal="oparators-payment" />}
      {avatar && <AvatarModal className={styles.avatarModal} />}
      <Sidebar className={styles.sidebar} />
      <Header className={styles.header} />
      <MobileHeader className={styles.mobileHeader} />
      <TimeLeft className={styles.timeLeft} />
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  )
}
