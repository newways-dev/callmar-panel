import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '../../components'
import {
  setAvatarModal,
  setNewWidgetModal,
  setOperatorDataModal,
  setOperatorPaymentModal,
} from '../../redux/modals/slice'
import styles from './ModalButtons.module.scss'

export interface ModalButtonsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  action?: string
}

export const ModalButtons = ({ action }: ModalButtonsProps) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setAvatarModal(false))
    dispatch(setNewWidgetModal(false))
    dispatch(setOperatorPaymentModal(false))
    dispatch(setOperatorDataModal(false))
  }

  return (
    <div className={styles.buttons}>
      <Link to="/">
        <Button onClick={() => handleClick()} className={styles.closeButton}>
          Закрыть
        </Button>
      </Link>
      <Link to="/">
        <Button onClick={() => handleClick()} className={styles.saveButton}>
          {action ? action : 'Сохранить'}
        </Button>
      </Link>
    </div>
  )
}
