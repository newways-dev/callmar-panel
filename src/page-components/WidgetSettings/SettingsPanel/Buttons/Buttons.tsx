import { useDispatch } from 'react-redux'
import { Button } from '../../../../components'
import { setWidgetSettings } from '../../../../redux/pages/slice'
import { Colors } from '../../../../types/colors'
import styles from './Buttons.module.scss'

export const Buttons = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setWidgetSettings(false))
  }

  return (
    <div className={styles.buttons}>
      <div className={styles.wrapper}>
        <Button onClick={() => handleClick()} className={styles.back}>
          К списку виджетов
        </Button>
        <Button
          onClick={() => handleClick()}
          className={styles.save}
          variant={Colors.Red}
        >
          Сохранить
        </Button>
      </div>
    </div>
  )
}
