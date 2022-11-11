import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '../../components'
import { setAvatarModal, setNewWidgetModal } from '../../redux/modals/slice'
import styles from './ModalButtons.module.scss'

export const ModalButtons = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setAvatarModal(false))
    dispatch(setNewWidgetModal(false))
  }

  return (
    <div className={styles.buttons}>
      <Link to='/'>
        <Button onClick={() => handleClick()} className={styles.closeButton}>
          Закрыть
        </Button>
      </Link>
      <Link to=''>
        <Button onClick={() => handleClick()} className={styles.saveButton}>
          Сохранить
        </Button>
      </Link>
    </div>
  )
}
