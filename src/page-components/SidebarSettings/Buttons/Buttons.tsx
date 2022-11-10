import { Link } from 'react-router-dom'
import { Button } from '../../../components'
import { Colors } from '../../../types/colors'
import styles from './Buttons.module.scss'

export const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <Link to='/'>
        <Button variant={Colors.Red} className={styles.save}>
          Сохранить
        </Button>
      </Link>
      <Link to='/'>
        <Button className={styles.back}>К списку виджетов</Button>
      </Link>
    </div>
  )
}
