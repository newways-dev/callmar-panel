import { useState } from 'react'
import {
  Explanation,
  NumInput,
  RadioButton,
  Toggle,
} from '../../../../components'
import { Buttons } from '../Buttons/Buttons'
import { Row } from '../Row/Row'
import { SettingsSection } from '../SettingsSection/SettingsSection'
import styles from './Behavior.module.scss'

export const Behavior = () => {
  const [visitorChoise, setVisitorChoice] = useState<
    'Да' | 'Нет' | 'Только в нерабочее время'
  >('Только в нерабочее время')

  return (
    <div className={styles.behavior}>
      <SettingsSection title="Поведение виджета на сайте">
        <Row title="Ловить звонки в не рабочее время">
          <Toggle mode="on" />
          <Explanation text="Если опция включена, то виджет будет собирать телефоны в нерабочее время и генерировать звонки автоматически в начале следующего рабочего дня." />
          <span className={styles.additionDesc}>
            Дополнительные настройки для ”Ловить звонки в нерабочее время”
          </span>
        </Row>
      </SettingsSection>
      <SettingsSection>
        <Row
          className={styles.row}
          title="Отступ от начала рабочего времени в минутах, для начала звонков пойманых в нерабочее время"
        >
          <NumInput defaultValue={20} />
        </Row>
        <Row
          className={styles.row}
          title="Планировать звонок по часовому поясу клиента"
        >
          <Toggle mode="off" />
          <Explanation text="Осуществлять запланированный звонок не раньше указаного часа по часовому поясу клиента" />
        </Row>
        <Row
          className={styles.row}
          title="Не использовать ”Ловить звонки в нерабочее время” в выходные дни"
        >
          <Toggle mode="off" />
          <Explanation text="Если опция включена, режим “Ловить звонки в нерабочее время” не будет использоваться в выходные дни вашего рабочего графика." />
        </Row>
        <Row className={styles.row} title="Ловить посетителя на выходе">
          <Toggle mode="on" />
          <Explanation text="Если опция включена, то виджет будет автоматически показан посетителю за момент до того, как посетитель решит покинуть сайт (используется поведенческий анализ движения курсосра мыши)." />
        </Row>
        <Row
          className={styles.row}
          title="Показывать виджет через ... секунд после открытия страницы сайта"
        >
          <Toggle mode="off" />
        </Row>
        <Row
          className={styles.row}
          title="Изменить время “Мы перезвоним вам за ... секунд”"
        >
          <div>
            <NumInput defaultValue={20} />
            <span className={styles.time}>секунды</span>
          </div>
        </Row>
        <Row
          className={styles.row}
          title="Предлагать звонок 1 клиенту не чаще 1 раза за"
        >
          <div>
            <NumInput defaultValue={20} />
            <span className={styles.time}>часа</span>
          </div>
        </Row>
        <Row
          className={styles.row}
          title="Предоставить посетителю выбор удобного времени звонка"
        >
          <div className={styles.radioButtons}>
            <RadioButton
              onChange={() => setVisitorChoice('Нет')}
              checked={visitorChoise === 'Нет'}
              label="Нет"
            />
            <RadioButton
              onChange={() => setVisitorChoice('Да')}
              checked={visitorChoise === 'Да'}
              label="Да"
            />
            <RadioButton
              onChange={() => setVisitorChoice('Только в нерабочее время')}
              checked={visitorChoise === 'Только в нерабочее время'}
              label="Только в нерабочее время"
            />
          </div>
          <Explanation
            text={
              <>
                Если включено, то в окне будет ссылка на <span>форму</span>
                выбора удобной даты и времени обратного звонка.
              </>
            }
          />
        </Row>
      </SettingsSection>
      <Buttons />
    </div>
  )
}
