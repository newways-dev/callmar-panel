import clsx from 'clsx'
import styles from './Modal.module.scss'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { NewWidget } from './NewWidget/NewWidget'
import { ModalType } from '../../types/modal'
import { OperatorPayment } from './OperatorPayment/OperatorPayment'
import { OperatorData } from './OperatorData/OperatorData'

export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  modal: ModalType
}

export const Modal = ({ className, modal }: ModalProps) => {
  switch (modal) {
    case 'new-widget':
      return (
        <div className={clsx(styles.modal, className)}>
          <NewWidget />
        </div>
      )
    case 'operator-data':
      return (
        <div className={clsx(styles.modal, className)}>
          <OperatorData />
        </div>
      )
    case 'oparators-payment':
      return (
        <div className={clsx(styles.modal, className)}>
          <OperatorPayment />
        </div>
      )

    default:
      return <></>
  }
}
