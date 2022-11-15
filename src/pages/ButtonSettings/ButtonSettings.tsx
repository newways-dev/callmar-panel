import clsx from 'clsx'
import { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectWrapper } from '../../components/SelectWrapper/SelectWrapper'
import { WidgetPostionType } from '../../types/widget'
import { Section, SidebarSettings } from '../../page-components'
import { ColorsList, Select, Toggle, Widget } from '../../components'
import styles from './ButtonSettings.module.scss'
import {
  selectWidgetColor,
  selectWidgetShape,
} from '../../redux/widget/selector'
import { setWidgetShape } from '../../redux/widget/slice'

export const ButtonSettings = () => {
  const dispatch = useDispatch()
  const widgetColor = useSelector(selectWidgetColor)
  const [showHint, setShowHint] = useState<boolean>(true)
  const widgetShape = useSelector(selectWidgetShape)
  const [widgetPosition, setWidgetPosition] =
    useState<WidgetPostionType>('bottom-right')

  const selectWidget = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'Круглая кнопка с трубкой') {
      dispatch(setWidgetShape('round'))
    }
    if (event.target.value === 'Круглая кнопка с телефоном') {
      dispatch(setWidgetShape('round-home'))
    }
    if (event.target.value === 'Округлая кнопка с трубкой') {
      dispatch(setWidgetShape('round-square'))
    }
    if (event.target.value === 'Квадратная кнопка с трубкой') {
      dispatch(setWidgetShape('square'))
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
      <SidebarSettings title='Настройки кнопки'>
        <div className={styles.wrapper}>
          <div className={styles.style}>
            <p className={styles.settingTitle}>Стиль кнопки</p>
            <SelectWrapper variant='gray'>
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
            <ColorsList type='widget' className={styles.colors} />
          </div>
          <div className={styles.position}>
            <p className={styles.settingTitle}>Расположение на сайте</p>
            <SelectWrapper variant='gray'>
              <Select
                onChange={selectPosition}
                options={['Низ-право', 'Низ-лево', 'Верх-право', 'Верх-лево']}
              />
            </SelectWrapper>
          </div>
        </div>
        <Section title='Подсказка для кнопки'>
          <div className={styles.wrapper}>
            <div className={styles.hint}>
              <p>Показывать подсказку при наведении на кнопку</p>
              <Toggle
                onClick={() => setShowHint(!showHint)}
                mode={showHint ? 'on' : 'off'}
              />
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
          {widgetShape === 'round-square' && (
            <Widget
              showHint={showHint}
              shape='round-square'
              color={widgetColor}
            />
          )}
          {widgetShape === 'square' && (
            <Widget showHint={showHint} shape='square' color={widgetColor} />
          )}
          {widgetShape === 'round-home' && (
            <Widget
              showHint={showHint}
              shape='round-home'
              color={widgetColor}
            />
          )}
          {widgetShape === 'round' && (
            <Widget showHint={showHint} shape='round' color={widgetColor} />
          )}
        </div>
      </div>
    </div>
  )
}
