import { useTranslation } from 'react-i18next'
import { Button, Widget } from '../../../../components'
import { SettingsSection } from '../SettingsSection/SettingsSection'
import styles from './Decor.module.scss'

import { Buttons } from '../Buttons/Buttons'
import { Row } from '../Row/Row'
import { Link } from 'react-router-dom'

export const Decor = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.decor}>
      <SettingsSection title={t('Цвет и текст виджета')}>
        <div className={styles.decorWrapper}>
          <Row title={t('Настройки окна виджета')}>
            <Link to='/widget-settings'>
              <Button className={styles.button}>{t('Настроить окно...')}</Button>
            </Link>
          </Row>
          <Row title={t('Настройки плавающей кнопки')}>
            <div className={styles.image}>
              <Widget className={styles.widget} />
              <span>{t('Ваша кнопка')}</span>
            </div>
            <Link to='/button-settings'>
              <Button className={styles.button}>{t('Настроить кнопку...')}</Button>
            </Link>
          </Row>
        </div>
      </SettingsSection>
      <Buttons />
    </div>
  )
}
