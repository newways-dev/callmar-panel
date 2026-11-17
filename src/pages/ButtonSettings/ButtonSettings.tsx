import clsx from 'clsx'
import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { SelectWrapper } from '../../components/SelectWrapper/SelectWrapper'
import { ActiveWidgetType, WidgetPostionType } from '../../types/widget'
import { Section, SidebarSettings } from '../../page-components'
import { ColorsList, Select, Toggle, Widget } from '../../components'
import styles from './ButtonSettings.module.scss'
import {
  selectWidgetColor,
  selectWidgetShape,
} from '../../redux/widget/selector'
import { setWidgetShape } from '../../redux/widget/slice'

export const ButtonSettings = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const widgetColor = useSelector(selectWidgetColor)
  const [showHint, setShowHint] = useState<boolean>(true)
  const widgetShape = useSelector(selectWidgetShape)
  const [widgetPosition, setWidgetPosition] =
    useState<WidgetPostionType>('bottom-right')

  const styleOptions: { value: ActiveWidgetType; label: string }[] = [
    { value: 'round', label: t('Круглая кнопка с трубкой') },
    { value: 'round-home', label: t('Круглая кнопка с телефоном') },
    { value: 'round-square', label: t('Округлая кнопка с трубкой') },
    { value: 'square', label: t('Квадратная кнопка с трубкой') },
  ]

  const positionOptions: { value: WidgetPostionType; label: string }[] = [
    { value: 'bottom-right', label: t('Низ-право') },
    { value: 'bottom-left', label: t('Низ-лево') },
    { value: 'top-right', label: t('Верх-право') },
    { value: 'top-left', label: t('Верх-лево') },
  ]

  const selectWidget = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setWidgetShape(event.target.value as ActiveWidgetType))
  }

  const selectPosition = (event: ChangeEvent<HTMLSelectElement>) => {
    setWidgetPosition(event.target.value as WidgetPostionType)
  }

  return (
    <div className={styles.buttonSettings}>
      <SidebarSettings title={t('Настройки кнопки')}>
        <div className={styles.wrapper}>
          <div className={styles.style}>
            <p className={styles.settingTitle}>{t('Стиль кнопки')}</p>
            <SelectWrapper variant='gray'>
              <Select
                onChange={selectWidget}
                options={styleOptions}
                value={widgetShape}
              />
            </SelectWrapper>
          </div>
          <div className={styles.color}>
            <p className={styles.settingTitle}>{t('Цвет кнопки')}</p>
            <ColorsList type='widget' className={styles.colors} />
          </div>
          <div className={styles.position}>
            <p className={styles.settingTitle}>{t('Расположение на сайте')}</p>
            <SelectWrapper variant='gray'>
              <Select
                onChange={selectPosition}
                options={positionOptions}
                value={widgetPosition}
              />
            </SelectWrapper>
          </div>
        </div>
        <Section title={t('Подсказка для кнопки')}>
          <div className={styles.wrapper}>
            <div className={styles.hint}>
              <p>{t('Показывать подсказку при наведении на кнопку')}</p>
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
          <Widget
            showHint={showHint}
            shape={widgetShape}
            color={widgetColor}
          />
        </div>
      </div>
    </div>
  )
}
