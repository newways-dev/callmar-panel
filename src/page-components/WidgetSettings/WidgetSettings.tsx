import { useTranslation } from 'react-i18next'
import { Input } from '../../components'
import { SettinsPanel } from './SettingsPanel/SettinsPanel'
import styles from './WidgetSettings.module.scss'

export const WidgetSettings = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.widgetSettings}>
      <div className={styles.top}>
        <p className={styles.title}>{t('Настройки виджета')}</p>
        <Input type='edit' placeholder='website.com' />
      </div>
      <SettinsPanel />
    </div>
  )
}
