import { Input } from '../../components'
import { SettinsPanel } from './SettingsPanel/SettinsPanel'
import styles from './WidgetSettings.module.scss'

export const WidgetSettings = () => {
  return (
    <div className={styles.widgetSettings}>
      <div className={styles.top}>
        <p className={styles.title}>Настройки виджета</p>
        <Input type="edit" placeholder="website.com" />
      </div>
      <SettinsPanel />
    </div>
  )
}
