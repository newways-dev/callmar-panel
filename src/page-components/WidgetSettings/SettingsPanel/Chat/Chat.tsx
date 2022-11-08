import { ReactSVG } from 'react-svg'
import {
  Button,
  ColorsList,
  Explanation,
  NumInput,
  Toggle,
} from '../../../../components'
import { Row } from '../Row/Row'
import { SettingsSection } from '../SettingsSection/SettingsSection'
import styles from './Chat.module.scss'

import play from '../../../../assets/icons/play.svg'
import { Operator } from './Operator/Operator'
import { Buttons } from '../Buttons/Buttons'

export const Chat = () => {
  return (
    <div className={styles.chat}>
      <SettingsSection title='Настройки чата'>
        <Row title='Показывать чат на сайте'>
          <Toggle mode='on' />
          <Explanation text='Если опция включена, то рядом с кнопкой обратного звонка будет кнопка онлайн чата.' />
        </Row>
        <Row title='Цвет чата'>
          <ColorsList
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
        <Row title='Вовлекать в диалог с оператором'>
          <Toggle mode='on' />
          <Explanation text='Если опция включена, то чат завлекает в диалог новых посетителей эмулируя печать оператора. Вовлекает когда Ваши операторы в Online.' />
          <p>Вовлекать через... секунд после открытия страницы сайта</p>
          <NumInput />
          <label>Приветствие</label>
          <input className={styles.input} />
          <label>Предложение</label>
          <input className={styles.input} />
          <label>Призыв к действию</label>
          <input className={styles.input} />
          <Button className={styles.button}>
            <ReactSVG src={play} />
            Воспроизвести демо
          </Button>
        </Row>
      </SettingsSection>
      <SettingsSection title='Оператор' description='Вкл./Выкл. оператора'>
        <Operator />
      </SettingsSection>
      <Buttons />
    </div>
  )
}
