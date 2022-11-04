import { ReactSVG } from 'react-svg'
import { Button } from '../../../../components'
import { SettingsSection } from '../SettingsSection/SettingsSection'
import styles from './Decor.module.scss'

import widget from '../../../../assets/icons/widget-icon.svg'
import { Buttons } from '../Buttons/Buttons'

export const Decor = () => {
  return (
    <div className={styles.decor}>
      <SettingsSection title="Цвет и текст виджета">
        <div className={styles.decorWrapper}>
          <div className={styles.row}>
            <span>Настройки окна виджета</span>
            <Button className={styles.button}>Настроить окно...</Button>
          </div>
          <div className={styles.row}>
            <span>Настройки плавающей кнопки</span>
            <div className={styles.image}>
              <ReactSVG src={widget} />
              <span>Ваша кнопка</span>
            </div>
            <Button className={styles.button}>Настроить кнопку...</Button>
          </div>
        </div>
      </SettingsSection>
      <Buttons />
    </div>
  )
}
