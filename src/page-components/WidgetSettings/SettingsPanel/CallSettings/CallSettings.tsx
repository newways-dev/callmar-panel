import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Explanation, Input, RadioButton } from '../../../../components'
import { demoWidgets } from '../../../../helpers/demoData'
import { Buttons } from '../Buttons/Buttons'
import { Row } from '../Row/Row'
import { SettingsSection } from '../SettingsSection/SettingsSection'
import styles from './CallSettings.module.scss'

export const CallSettings = () => {
  const { t } = useTranslation()
  const [checked, setChecked] = useState<number>(0)

  const site = demoWidgets[0].site

  const greetings = [
    t('Звонок с сайта'),
    t('Звонок с сайта: {{site}}', { site }),
    t('Звонок с сайта: {{site}}, ожидайте соединения', { site }),
    t('Звонок с сайта: {{site}}, источник: реклама', { site }),
  ]

  return (
    <div className={styles.callSettings}>
      <SettingsSection title={t('Настройки звонка')}>
        <div className={styles.greet}>
          <Row
            title={t(
              'Приветствие, проговариваемое менеджеру перед соединением с клиентом'
            )}
          >
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
          <Row title={t('Как роботу произносить название сайта в приветствии')}>
            <div>
              <Input type='main' />
              <Explanation
                text={t(
                  'Напишите, как робот должен называть ваш сайт, когда менеджер поднимает трубку. Можно писать на русском. По умолчанию используется адрес сайта.'
                )}
              />
            </div>
          </Row>
        </div>
      </SettingsSection>
      <Buttons />
    </div>
  )
}
