import { Button, Widget } from '../../../../components'
import { SettingsSection } from '../SettingsSection/SettingsSection'
import styles from './Decor.module.scss'

import { Buttons } from '../Buttons/Buttons'
import { Row } from '../Row/Row'
import { Link } from 'react-router-dom'

export const Decor = () => {
  return (
    <div className={styles.decor}>
      <SettingsSection title='Цвет и текст виджета'>
        <div className={styles.decorWrapper}>
          <Row title='Настройки окна виджета'>
            <Link to='/widget-settings'>
              <Button className={styles.button}>Настроить окно...</Button>
            </Link>
          </Row>
          <Row title='Настройки плавающей кнопки'>
            <div className={styles.image}>
              <Widget className={styles.widget} />
              <span>Ваша кнопка</span>
            </div>
            <Link to='/button-settings'>
              <Button className={styles.button}>Настроить кнопку...</Button>
            </Link>
          </Row>
        </div>
      </SettingsSection>
      <Buttons />
    </div>
  )
}
