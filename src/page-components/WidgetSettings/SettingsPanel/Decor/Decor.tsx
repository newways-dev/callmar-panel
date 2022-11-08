import { ReactSVG } from 'react-svg'
import { Button } from '../../../../components'
import { SettingsSection } from '../SettingsSection/SettingsSection'
import styles from './Decor.module.scss'

import widget from '../../../../assets/icons/widget-icon.svg'
import { Buttons } from '../Buttons/Buttons'
import { Row } from '../Row/Row'

export const Decor = () => {
  return (
    <div className={styles.decor}>
      <SettingsSection title='Цвет и текст виджета'>
        <div className={styles.decorWrapper}>
          <Row title='Настройки окна виджета'>
            <Button className={styles.button}>Настроить окно...</Button>
          </Row>
          <Row title='Настройки плавающей кнопки'>
            <div className={styles.image}>
              <ReactSVG src={widget} />
              <span>Ваша кнопка</span>
            </div>
            <Button className={styles.button}>Настроить кнопку...</Button>
          </Row>
        </div>
      </SettingsSection>
      <Buttons />
    </div>
  )
}
