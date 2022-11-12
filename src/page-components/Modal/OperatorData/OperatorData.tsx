import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { ReactSVG } from 'react-svg'
import { setOperatorDataModal } from '../../../redux/modals/slice'
import styles from './OperatorData.module.scss'

import close from '../../../assets/icons/close-modal.svg'
import { ModalButtons } from '../../ModalButtons/ModalButtons'

export const OperatorData = () => {
  const dispatch = useDispatch()

  return (
    <div className={styles.newWidget}>
      <div className={styles.title}>
        <p>Новый виджет</p>
        <ReactSVG
          onClick={() => dispatch(setOperatorDataModal(false))}
          src={close}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.address}>
          <p>Адрес сайта:</p>
          <input placeholder="tehnix.su" className={styles.input} />
          <p>Сайт куда будет установлен виджет</p>
        </div>
      </div>
      <ModalButtons />
    </div>
  )
}
