import clsx from 'clsx'
import { useEffect, DetailedHTMLProps, HTMLAttributes } from 'react'
import { ReactSVG } from 'react-svg'
import { Toggle } from '../../components'
import styles from './NewWidgetModal.module.scss'

import close from '../../assets/icons/close-modal.svg'
import { useDispatch, useSelector } from 'react-redux'
import { selectNewWidgetModal } from '../../redux/modals/selector'
import { setNewWidgetModal } from '../../redux/modals/slice'
import { ModalButtons } from '../ModalButtons/ModalButtons'

export interface NewWidgetModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const NewWidgetModal = ({ className }: NewWidgetModalProps) => {
  const newWidget = useSelector(selectNewWidgetModal)
  const dispatch = useDispatch()

  useEffect(() => {
    if (newWidget) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [newWidget])

  return (
    <div className={clsx(styles.newWidgetModal, className)}>
      <div className={styles.modal}>
        <div className={styles.title}>
          <p>Новый виджет</p>
          <ReactSVG
            onClick={() => dispatch(setNewWidgetModal(false))}
            src={close}
          />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.address}>
            <p>Адрес сайта:</p>
            <input placeholder="tehnix.su" className={styles.input} />
            <p>Сайт куда будет установлен виджет</p>
          </div>
          <div className={styles.toggles}>
            <div className={styles.toggle}>
              <p>Включить звонки</p>
              <Toggle mode="on" />
            </div>
            <div className={styles.toggle}>
              <p>Включить чат</p>
              <Toggle mode="on" />
            </div>
          </div>
        </div>
        <ModalButtons />
      </div>
    </div>
  )
}
