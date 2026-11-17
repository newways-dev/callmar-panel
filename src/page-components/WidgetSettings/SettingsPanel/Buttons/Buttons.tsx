import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../../components'
import { Colors } from '../../../../types/colors'
import styles from './Buttons.module.scss'

export const Buttons = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const backToList = () => navigate('/widgets')

  return (
    <div className={styles.buttons}>
      <div className={styles.wrapper}>
        <Button onClick={backToList} className={styles.back}>
          {t('К списку виджетов')}
        </Button>
        <Button
          onClick={backToList}
          className={styles.save}
          variant={Colors.Red}
        >
          {t('Сохранить')}
        </Button>
      </div>
    </div>
  )
}
