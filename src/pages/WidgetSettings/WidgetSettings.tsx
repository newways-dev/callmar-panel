import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ColorsList, Input, Select, Toggle } from '../../components'
import { SelectWrapper } from '../../components/SelectWrapper/SelectWrapper'
import { Section, SidebarSettings } from '../../page-components'
import styles from './WidgetSettings.module.scss'

import dropLogo from '../../assets/icons/drop-logo.svg'
import { WidgetLayout } from '../../types/widget'
import { Preview } from './Preview/Preview'

export const WidgetSettings = () => {
  const { t } = useTranslation()

  // `null` means "not edited yet": the default text then follows the language
  const [headingEdit, setHeading] = useState<string | null>(null)
  const [callSeconds, setCallSeconds] = useState<number>(27)
  const [noWorkTextEdit, setNoWorkText] = useState<string | null>(null)
  const [buttonTextEdit, setButtonText] = useState<string | null>(null)
  const [showTimer, setShowTimer] = useState<boolean>(false)
  const [layout, setLayout] = useState<WidgetLayout>('standart')

  const heading = headingEdit ?? t('У вас остались вопросы?')
  const noWorkText =
    noWorkTextEdit ??
    t('Сейчас мы уже не работаем, но мы можем перезвонить вам завтра.')
  const buttonText = buttonTextEdit ?? t('Жду звонка!')

  const layoutOptions: { value: WidgetLayout; label: string }[] = [
    { value: 'standart', label: t('Стандартный') },
    { value: 'foto', label: t('С фото сотрудника') },
    { value: 'banner', label: t('Баннер') },
    { value: 'full-screen', label: t('На весь экран') },
  ]

  return (
    <div className={styles.widgetSettings}>
      <div className={styles.previewMode}>
        <p>{t('Режим предпросмотра')}</p>
        <p className={styles.url}>http://example-shop.com</p>
      </div>
      <div className={styles.container}>
        <div className={styles.sidebarWrapper}>
          <SidebarSettings
            className={styles.sidebar}
            title={t('Настройки виджета')}
          >
            <div className={styles.wrapper}>
              <div className={styles.layout}>
                <p className={styles.settingTitle}>{t('Шаблон виджета')}</p>
                <SelectWrapper variant='gray'>
                  <Select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setLayout(e.target.value as WidgetLayout)
                    }
                    options={layoutOptions}
                    value={layout}
                  />
                </SelectWrapper>
              </div>
              <div className={styles.color}>
                <p className={styles.settingTitle}>
                  {t('Цветовая схема виджета')} <span>{t('сбросить')}</span>
                </p>
                <ColorsList
                  type='widget'
                  colors={[
                    'Blue',
                    'Gray',
                    'Green',
                    'LightGreen',
                    'LightPurple',
                    'LightRed',
                    'Orange',
                  ]}
                />
              </div>
            </div>
            <Section title={t('Таймер обратного звонка')}>
              <div className={styles.wrapper}>
                <div className={styles.timer}>
                  <p>{t('Скрыть таймер обратного отсчета заказа звонка')}</p>
                  <Toggle
                    onClick={() => setShowTimer(!showTimer)}
                    mode={showTimer ? 'on' : 'off'}
                  />
                </div>
              </div>
            </Section>
            <Section title={t('Настройка текста')}>
              <div className={styles.wrapper}>
                <div className={styles.logo}>
                  <p className={styles.settingTitle}>
                    {t('Логотип (не менее 35 пикселей по любой из сторон):')}
                  </p>
                  <div className={styles.dad}>
                    <img src={dropLogo} alt='' />
                    <p>
                      {t('Перетащите файл или нажмите, чтобы установить логотип')}
                    </p>
                  </div>
                </div>
                <div className={styles.heading}>
                  <p className={styles.settingTitle}>{t('Заголовок:')}</p>
                  <Input
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                    className={styles.input}
                    type='main'
                  />
                </div>
                <div className={styles.text}>
                  <p className={styles.settingTitle}>{t('Позвонить через:')}</p>
                  <Input
                    value={isNaN(callSeconds) ? 27 : callSeconds}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setCallSeconds(Number(e.target.value))
                    }
                    type='main'
                  />
                </div>
                <div className={styles.noWorkText}>
                  <p className={styles.settingTitle}>
                    {t('Текст в нерабочее время:')}
                  </p>
                  <Input
                    value={noWorkText}
                    onChange={(e) => setNoWorkText(e.target.value)}
                    type='main'
                  />
                </div>
                <div className={styles.buttonText}>
                  <p className={styles.settingTitle}>{t('Текст кнопки:')}</p>
                  <Input
                    value={buttonText}
                    onChange={(e) => setButtonText(e.target.value)}
                    type='main'
                  />
                </div>
              </div>
            </Section>
          </SidebarSettings>
        </div>
        <Preview
          layout={layout}
          heading={heading}
          showTimer={showTimer}
          buttonText={buttonText}
          callSeconds={callSeconds}
        />
      </div>
    </div>
  )
}
