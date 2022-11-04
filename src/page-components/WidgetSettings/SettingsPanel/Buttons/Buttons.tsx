import { Button } from '../../../../components'
import { Colors } from '../../../../types/colors'
import styles from './Buttons.module.scss'

export const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <div className={styles.wrapper}>
        <Button className={styles.back}>К списку виджетов</Button>
        <Button className={styles.save} variant={Colors.Red}>
          Сохранить
        </Button>
      </div>
    </div>
  )
}
