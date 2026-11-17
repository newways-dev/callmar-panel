import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '../../../components'
import { Colors } from '../../../types/colors'
import styles from './Buttons.module.scss'

export const Buttons = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.buttons}>
      <Link to='/widgets'>
        <Button variant={Colors.Red} className={styles.save}>
          {t('Сохранить')}
        </Button>
      </Link>
      <Link to='/widgets'>
        <Button className={styles.back}>{t('К списку виджетов')}</Button>
      </Link>
    </div>
  )
}
