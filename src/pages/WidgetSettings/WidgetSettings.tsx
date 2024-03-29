import { ChangeEvent, useState } from 'react'
import { ColorsList, Input, Select, Toggle } from '../../components'
import { SelectWrapper } from '../../components/SelectWrapper/SelectWrapper'
import { Section, SidebarSettings } from '../../page-components'
import styles from './WidgetSettings.module.scss'

import dropLogo from '../../assets/icons/drop-logo.svg'
import { WidgetLayout } from '../../types/widget'
import { Preview } from './Preview/Preview'

export const WidgetSettings = () => {
  const [heading, setHeading] = useState<string>('У Вас остались вопросы?')
  const [callSeconds, setCallSeconds] = useState<number>(27)
  const [noWorkText, setNoWorkText] = useState<string>(
    'Сейчас мы уже не работаем, но мы можем перезвонить вам завтра.'
  )
  const [buttonText, setButtonText] = useState<string>('Жду звонка!')
  const [showTimer, setShowTimer] = useState<boolean>(false)
  const [layout, setLayout] = useState<WidgetLayout>('standart')

  const handleSelectLayout = (value: string) => {
    if (value === 'Стандартный') {
      setLayout('standart')
    }
    if (value === 'С фото сотрудника') {
      setLayout('foto')
    }
    if (value === 'Баннер') {
      setLayout('banner')
    }
    if (value === 'На весь экран') {
      setLayout('full-screen')
    }
  }

  return (
    <div className={styles.widgetSettings}>
      <div className={styles.previewMode}>
        <p>Режим предпросмотра</p>
        <p className={styles.url}>http://tehnix.su</p>
      </div>
      <div className={styles.container}>
        <div className={styles.sidebarWrapper}>
          <SidebarSettings className={styles.sidebar} title='Настройки виджета'>
            <div className={styles.wrapper}>
              <div className={styles.layout}>
                <p className={styles.settingTitle}>Шаблон виджета</p>
                <SelectWrapper variant='gray'>
                  <Select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      handleSelectLayout(e.target.value)
                    }
                    options={[
                      'Стандартный',
                      'С фото сотрудника',
                      'Баннер',
                      'На весь экран',
                    ]}
                    placeholder='Стандартный'
                  />
                </SelectWrapper>
              </div>
              <div className={styles.color}>
                <p className={styles.settingTitle}>
                  Цветовая схема виджета <span> сбросить</span>
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
            <Section title='Таймер обратного звонка'>
              <div className={styles.wrapper}>
                <div className={styles.timer}>
                  <p>Скрыть таймер обратного осчета заказа звонка</p>
                  <Toggle
                    onClick={() => setShowTimer(!showTimer)}
                    mode={showTimer ? 'on' : 'off'}
                  />
                </div>
              </div>
            </Section>
            <Section title='Настройка текста'>
              <div className={styles.wrapper}>
                <div className={styles.logo}>
                  <p className={styles.settingTitle}>
                    Логотип (не менее 35 пикселей по любой из сторон):
                  </p>
                  <div className={styles.dad}>
                    <img src={dropLogo} alt='' />
                    <p>Перетащите файл или нажмите чтобы установить логотип</p>
                  </div>
                </div>
                <div className={styles.heading}>
                  <p className={styles.settingTitle}>Заголовок:</p>
                  <Input
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                    className={styles.input}
                    type='main'
                  />
                </div>
                <div className={styles.text}>
                  <p className={styles.settingTitle}>Позвонить через:</p>
                  <Input
                    value={isNaN(callSeconds) ? 27 : callSeconds}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setCallSeconds(Number(e.target.value))
                    }
                    type='main'
                  />
                  {/* <p>
                    Используйте <span>%seconds%</span> для замены на число
                    секунд
                  </p> */}
                </div>
                <div className={styles.noWorkText}>
                  <p className={styles.settingTitle}>
                    Текст в нерабочее время:
                  </p>
                  <Input
                    value={noWorkText}
                    onChange={(e) => setNoWorkText(e.target.value)}
                    type='main'
                    placeholder='Сейчас мы уже не работаем, но мы можем перезвонить вам завтра.'
                  />
                </div>
                <div className={styles.buttonText}>
                  <p className={styles.settingTitle}>Текст кнопки:</p>
                  <Input
                    value={buttonText}
                    onChange={(e) => setButtonText(e.target.value)}
                    type='main'
                    placeholder='Жду звонка!'
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
