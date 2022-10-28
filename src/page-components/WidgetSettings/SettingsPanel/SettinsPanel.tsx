import { Tabs } from '../../../components'
import styles from './SettingsPanel.module.scss'
import { SettingsSection } from './SettingsSection/SettingsSection'

export const SettinsPanel = () => {
  const tabs = [
    'Отдел продаж',
    'Оформление',
    'Поведение',
    'Чат',
    'Настройки звонка',
    'Код виджета',
  ]

  return (
    <div className={styles.panel}>
      <Tabs tabs={tabs} type="settings" />
      <SettingsSection
        title="Номер телефона для приема звонкой"
        description={
          <div>
            Укажите список номеров для приема звонков с сайта. Дозвон будет
            производиться по списку сверху вниз. Порядок номеров можно менять
            потащив за !!! около номера.
          </div>
        }
      >
        434-300-34
      </SettingsSection>
    </div>
  )
}
