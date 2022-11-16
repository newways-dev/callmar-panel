import { useState } from 'react'
import { Explanation, Input, RadioButton } from '../../../../components'
import { Buttons } from '../Buttons/Buttons'
import { Row } from '../Row/Row'
import { SettingsSection } from '../SettingsSection/SettingsSection'
import styles from './CallSettings.module.scss'

export const CallSettings = () => {
  const [checked, setChecked] = useState<number>(0)

  const greetings = [
    'Звонок с сайта',
    'Звонок с сайта: tehnix.su',
    'Звонок с сайта: tehnix.su, ожидайте соеденения',
    'Звонок с сайта: tehnix.su, источник: реклама',
  ]

  return (
    <div className={styles.callSettings}>
      <SettingsSection title='Настройки звонка'>
        <div className={styles.greet}>
          <Row title='Приветствие проговариваемое менеджеру перед соеденением с клиентом'>
            {greetings.map((greet, index) => (
              <RadioButton
                onChange={() => {}}
                onClick={() => setChecked(index)}
                checked={checked === index}
                label={greet}
                key={index}
              />
            ))}
          </Row>
        </div>
        <div className={styles.websiteName}>
          <Row title='Как роботу програмировать название сайта в приветствии'>
            <div>
              <Input type='main' />
              <Explanation text='Напишите как робот должен называть ваш сайт когда менеджер поднимает трубку. Можно писать на русском. По умолчанию используеться адрес сайта.' />
            </div>
          </Row>
        </div>
      </SettingsSection>
      <Buttons />
    </div>
  )
}
