import { ChangeEvent, useState } from 'react'
import { Button, ColorsList, Input, Select, Toggle } from '../../components'
import { Section, SidebarSettings } from '../../page-components'
import styles from './WidgetSettings.module.scss'

import dropLogo from '../../assets/icons/drop-logo.svg'
// import timer from '../../assets/icons/timer.svg'

export const WidgetSettings = () => {
  const [heading, setHeading] = useState<string>('У Вас остались вопросы?')
  const [text, setText] = useState<string>(
    'Хотите, перезвоним вам за 27 секунд?'
  )
  const [noWorkText, setNoWorkText] = useState<string>(
    'Сейчас мы уже не работаем, но мы можем перезвонить вам завтра.'
  )
  const [buttonText, setButtonText] = useState<string>('Жду звонка!')

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
                <Select
                  variant='gray'
                  options={['Стандартный']}
                  placeholder='Стандартный'
                />
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
                  <Toggle mode='off' />
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
                  <p className={styles.settingTitle}>Текст:</p>
                  <Input
                    value={text}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setText(e.target.value)
                    }
                    type='main'
                    placeholder='Хотите, перезвоним вам за %seconds%?'
                  />
                  <p>
                    Используйте <span>%seconds%</span> для замены на число
                    секунд
                  </p>
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
                <div className={styles.buttonText}>
                  <p className={styles.settingTitle}>Текст кнопки:</p>
                  <Input
                    type='main'
                    placeholder='Мы обязательно перезвоним вам  %callDate% в %callTime%.'
                  />
                  <p className={styles.desc}>
                    Используйте <span>%callDate%</span> для замены на дату и
                    <span> %callTime%</span> для времени, когда будет звонок.
                  </p>
                </div>
              </div>
            </Section>
          </SidebarSettings>
        </div>
        <div className={styles.preview}>
          <div className={styles.wrapper}>
            <p className={styles.heading}>{heading}</p>
            <p className={styles.text}>{text}</p>
            <div className={styles.actions}>
              <Input className={styles.input} type='phone' />
              <div className={styles.buttonRight}>
                <Button>{buttonText}</Button>
                <p>Звонок бесплатный</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
