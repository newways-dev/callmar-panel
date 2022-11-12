import clsx from 'clsx'
import { ChangeEvent, useState } from 'react'
import { ColorsList, Select, Toggle } from '../../components'
import { Section, SidebarSettings } from '../../page-components'
import styles from './ButtonSettings.module.scss'

import round_square from '../../assets/images/widget/round-square.png'
import round_with_home_phone from '../../assets/images/widget/round-with-home-phone.png'
import round_with_phone from '../../assets/images/widget/round-with-phone.png'
import square_with_phone from '../../assets/images/widget/square-with-phone.png'
import { ActiveWidgetType, WidgetPostionType } from '../../types/widget'
import { SelectWrapper } from '../../components/SelectWrapper/SelectWrapper'

export const ButtonSettings = () => {
  const [activeWidget, setActiveWidget] = useState<ActiveWidgetType>('round')
  const [widgetPosition, setWidgetPosition] =
    useState<WidgetPostionType>('bottom-right')

  const selectWidget = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'Круглая кнопка с трубкой') {
      setActiveWidget('round')
    }
    if (event.target.value === 'Круглая кнопка с телефоном') {
      setActiveWidget('round-home')
    }
    if (event.target.value === 'Округлая кнопка с трубкой') {
      setActiveWidget('round-square')
    }
    if (event.target.value === 'Квадратная кнопка с трубкой') {
      setActiveWidget('square')
    }
  }

  const selectPosition = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'Низ-лево') {
      setWidgetPosition('bottom-left')
    }
    if (event.target.value === 'Низ-право') {
      setWidgetPosition('bottom-right')
    }
    if (event.target.value === 'Верх-лево') {
      setWidgetPosition('top-left')
    }
    if (event.target.value === 'Верх-право') {
      setWidgetPosition('top-right')
    }
  }

  return (
    <div className={styles.buttonSettings}>
      <SidebarSettings title="Настройки кнопки">
        <div className={styles.wrapper}>
          <div className={styles.style}>
            <p className={styles.settingTitle}>Стиль кнопки</p>
            <SelectWrapper variant="gray">
              <Select
                onChange={selectWidget}
                options={[
                  'Круглая кнопка с трубкой',
                  'Круглая кнопка с телефоном',
                  'Округлая кнопка с трубкой',
                  'Квадратная кнопка с трубкой',
                ]}
              />
            </SelectWrapper>
          </div>
          <div className={styles.color}>
            <p className={styles.settingTitle}>Цвет кнопки</p>
            <ColorsList
              type="button"
              className={styles.colors}
              colors={[
                'Gray',
                'Blue',
                'Green',
                'LightGreen',
                'LightPurple',
                'LightRed',
                'Orange',
              ]}
            />
          </div>
          <div className={styles.position}>
            <p className={styles.settingTitle}>Расположение на сайте</p>
            <SelectWrapper variant="gray">
              <Select
                onChange={selectPosition}
                options={['Низ-право', 'Низ-лево', 'Верх-право', 'Верх-лево']}
              />
            </SelectWrapper>
          </div>
        </div>
        <Section title="Подсказка для кнопки">
          <div className={styles.wrapper}>
            <div className={styles.hint}>
              <p>Показывать подсказку при наведении на кнопку</p>
              <Toggle mode="on" />
            </div>
          </div>
        </Section>
      </SidebarSettings>
      <div
        className={clsx(styles.preview, {
          [styles.bottomRight]: widgetPosition === 'bottom-right',
          [styles.bottomLeft]: widgetPosition === 'bottom-left',
          [styles.topLeft]: widgetPosition === 'top-left',
          [styles.topRight]: widgetPosition === 'top-right',
        })}
      >
        <div className={styles.widgets}>
          {activeWidget === 'round-square' && (
            <div className={styles.widget}>
              <div className={styles.message}>
                <p>Есть вопросы? Нажмите и мы перезвоним вам за 27 секунд!</p>
              </div>
              <img src={round_square} alt="" />
            </div>
          )}
          {activeWidget === 'square' && (
            <div className={styles.widget}>
              <div className={styles.message}>
                <p>Есть вопросы? Нажмите и мы перезвоним вам за 27 секунд!</p>
              </div>
              <img src={square_with_phone} alt="" />
            </div>
          )}
          {activeWidget === 'round-home' && (
            <div className={styles.widget}>
              <div className={styles.message}>
                <p>Есть вопросы? Нажмите и мы перезвоним вам за 27 секунд!</p>
              </div>
              <img src={round_with_home_phone} alt="" />
            </div>
          )}
          {activeWidget === 'round' && (
            <div className={styles.widget}>
              <div className={styles.message}>
                <p>Есть вопросы? Нажмите и мы перезвоним вам за 27 секунд!</p>
              </div>
              <img src={round_with_phone} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
