import { Button } from '../../../components'
import { Colors } from '../../../types/colors'
import styles from './Buttons.module.scss'

export const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <Button variant={Colors.Red} className={styles.save}>
        Сохранить
      </Button>
      <Button className={styles.back}>К списку виджетов</Button>
    </div>
  )
}
