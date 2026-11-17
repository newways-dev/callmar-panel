import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
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
  const { t } = useTranslation()
  const dispatch = useDispatch()

  // Both buttons close the modal and leave the user on the current page
  const handleClick = () => {
    dispatch(setAvatarModal(false))
    dispatch(setNewWidgetModal(false))
    dispatch(setOperatorPaymentModal(false))
    dispatch(setOperatorDataModal(false))
  }

  return (
    <div className={styles.buttons}>
      <Button onClick={handleClick} className={styles.closeButton}>
        {t('Закрыть')}
      </Button>
      <Button onClick={handleClick} className={styles.saveButton}>
        {action ? action : t('Сохранить')}
      </Button>
    </div>
  )
}
