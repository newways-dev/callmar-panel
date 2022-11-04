import { ColorsList, Explanation, Toggle } from '../../../../components'
import { Row } from '../Row/Row'
import { Colors } from '../../../../types/colors'
import { SettingsSection } from '../SettingsSection/SettingsSection'

export const Chat = () => {
  return (
    <div>
      <SettingsSection title="Настройки чата">
        <Row title="Показывать чат на сайте">
          <Toggle mode="on" />
          <Explanation text="Если опция включена, то рядом с кнопкой обратного звонка будет кнопка онлайн чата." />
        </Row>
        <Row title="Цвет чата">
          <ColorsList
            colors={[
              Colors.Gray,
              Colors.LightGreen,
              Colors.LightPurple,
              Colors.LightRed,
              Colors.Orange,
              Colors.Blue,
              Colors.Green,
            ]}
          />
        </Row>
        <Row title="Вовлекать в диалог с оператором">
          <Toggle mode="on" />
          <Explanation text="Если опция включена, то чат завлекает в диалог новых посетителей эмулируя печать оператора. Вовлекает когда Ваши операторы в Online." />
        </Row>
      </SettingsSection>
    </div>
  )
}
