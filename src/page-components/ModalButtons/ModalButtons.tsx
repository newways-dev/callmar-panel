import { Button } from '../../components'
import styles from './ModalButtons.module.scss'

export const ModalButtons = () => {
  return (
    <div className={styles.buttons}>
      <Button className={styles.closeButton}>Закрыть</Button>
      <Button className={styles.saveButton}>Сохранить</Button>
    </div>
  )
}
