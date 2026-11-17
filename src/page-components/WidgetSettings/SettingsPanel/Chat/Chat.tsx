import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import {
  Button,
  ColorsList,
  Explanation,
  NumInput,
  Toggle,
} from '../../../../components'
import { Row } from '../Row/Row'
import { Buttons } from '../Buttons/Buttons'
import { Operator } from './Operator/Operator'
import { SettingsSection } from '../SettingsSection/SettingsSection'
import styles from './Chat.module.scss'

import closeChat from '../../../../assets/icons/closeChat.svg'
import operator from '../../../../assets/images/operator.png'
import { selectChatColor } from '../../../../redux/colors/selector'
import play from '../../../../assets/icons/play.svg'
import { useState } from 'react'
import clsx from 'clsx'

export const Chat = () => {
  const { t } = useTranslation()
  const chat = useSelector(selectChatColor)

  // Empty until the user types, so the default texts follow the language
  const [greetInput, setGreet] = useState<string>('')
  const [ctaInput, setCta] = useState<string>('')
  const [offerInput, setOffer] = useState<string>('')

  const greet = greetInput || t('Здравствуйте!')
  const cta = ctaInput || t('Хотите узнать подробнее?')
  const offer = offerInput || t('У нас для вас специальное предложение.')

  return (
    <div className={styles.chat}>
      <SettingsSection title={t('Настройки чата')}>
        <Row title={t('Показывать чат на сайте')}>
          <Toggle mode='on' />
          <Explanation
            text={t(
              'Если опция включена, то рядом с кнопкой обратного звонка будет кнопка онлайн-чата.'
            )}
          />
        </Row>
        <Row title={t('Цвет чата')}>
          <ColorsList type='chat' />
        </Row>
        <Row title={t('Вовлекать в диалог с оператором')}>
          <Toggle mode='on' />
          <Explanation
            text={t(
              'Если опция включена, то чат вовлекает в диалог новых посетителей, эмулируя печать оператора. Вовлекает, когда ваши операторы онлайн.'
            )}
          />
          <p>{t('Вовлекать через... секунд после открытия страницы сайта')}</p>
          <NumInput defaultValue={20} />
          <div className={styles.previewWrapper}>
            <div className={styles.fields}>
              <label>{t('Приветствие')}</label>
              <input
                placeholder={greet}
                onChange={(e) => setGreet(e.target.value)}
                className={styles.input}
              />
              <label>{t('Предложение')}</label>
              <input
                placeholder={offer}
                onChange={(e) => setOffer(e.target.value)}
                className={styles.input}
              />
              <label>{t('Призыв к действию')}</label>
              <input
                placeholder={cta}
                onChange={(e) => setCta(e.target.value)}
                className={styles.input}
              />
              <Button className={styles.button}>
                <ReactSVG src={play} />
                {t('Воспроизвести демо')}
              </Button>
            </div>
            <div className={styles.preview}>
              <div className={styles.messageWrapper}>
                <div
                  className={clsx(styles.message, {
                    [styles.green]: chat === 'Green',
                    [styles.blue]: chat === 'Blue',
                    [styles.gray]: chat === 'Gray',
                    [styles.lightGreen]: chat === 'LightGreen',
                    [styles.lightPurple]: chat === 'LightPurple',
                    [styles.lightRed]: chat === 'LightRed',
                    [styles.orange]: chat === 'Orange',
                  })}
                >
                  <ReactSVG src={closeChat} />
                  <p className={styles.title}>{t('Оператор:')}</p>
                  <p className={styles.text}>
                    <span>{greetInput || greet}</span>
                    <span>{offerInput || offer}</span>
                    <span>{ctaInput || cta}</span>
                  </p>
                </div>
                <div className={styles.operator}>
                  <img src={operator} alt='' />
                  <span className={styles.messagesCount}>1</span>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </SettingsSection>
      <SettingsSection
        title={t('Оператор')}
        description={t('Вкл./Выкл. оператора')}
      >
        <Operator />
      </SettingsSection>
      <Buttons />
    </div>
  )
}
