import { useSelector } from 'react-redux'
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
  const chat = useSelector(selectChatColor)

  const [greet, setGreet] = useState<string>('Здравствуйте!')
  const [cta, setCta] = useState<string>('Хотите узнать подробнее?')
  const [offer, setOffer] = useState<string>(
    'У нас для вас специальное предложение.'
  )

  return (
    <div className={styles.chat}>
      <SettingsSection title="Настройки чата">
        <Row title="Показывать чат на сайте">
          <Toggle mode="on" />
          <Explanation text="Если опция включена, то рядом с кнопкой обратного звонка будет кнопка онлайн чата." />
        </Row>
        <Row title="Цвет чата">
          <ColorsList
            type="chat"
            colors={[
              'Green',
              'Blue',
              'Gray',
              'LightGreen',
              'LightPurple',
              'LightRed',
              'Orange',
            ]}
          />
        </Row>
        <Row title="Вовлекать в диалог с оператором">
          <Toggle mode="on" />
          <Explanation text="Если опция включена, то чат завлекает в диалог новых посетителей эмулируя печать оператора. Вовлекает когда Ваши операторы в Online." />
          <p>Вовлекать через... секунд после открытия страницы сайта</p>
          <NumInput defaultValue={20} />
          <div className={styles.previewWrapper}>
            <div className={styles.fields}>
              <label>Приветствие</label>
              <input
                placeholder={greet}
                onChange={(e) => setGreet(e.target.value)}
                className={styles.input}
              />
              <label>Предложение</label>
              <input
                placeholder={offer}
                onChange={(e) => setOffer(e.target.value)}
                className={styles.input}
              />
              <label>Призыв к действию</label>
              <input
                placeholder={cta}
                onChange={(e) => setCta(e.target.value)}
                className={styles.input}
              />
              <Button className={styles.button}>
                <ReactSVG src={play} />
                Воспроизвести демо
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
                  <p className={styles.title}>Оператор:</p>
                  <p className={styles.text}>
                    <span>{greet}</span>
                    <span>{offer}</span>
                    <span>{cta}</span>
                  </p>
                </div>
                <div className={styles.operator}>
                  <img src={operator} alt="" />
                  <span className={styles.messagesCount}>1</span>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </SettingsSection>
      <SettingsSection title="Оператор" description="Вкл./Выкл. оператора">
        <Operator />
      </SettingsSection>
      <Buttons />
    </div>
  )
}
