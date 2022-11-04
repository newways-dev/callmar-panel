import { useState } from 'react'
import { SettingsTabs } from '../../../components'
import { SettingsPages } from '../../../types/pages'
import { Behavior } from './Behavior/Behavior'
import { CallSettings } from './CallSettings/CallSettings'
import { Chat } from './Chat/Chat'
import { Decor } from './Decor/Decor'
import { SalesDepartment } from './SalesDepartment/SalesDepartment'

import styles from './SettingsPanel.module.scss'
import { WidgetCode } from './WidgetCode/WidgetCode'

export const SettinsPanel = () => {
  const [settingsPage, setSettingsPage] =
    useState<SettingsPages>('sales-department')

  const tabs = [
    'Отдел продаж',
    'Оформление',
    'Поведение',
    'Чат',
    'Настройки звонка',
    'Код виджета',
  ]

  return (
    <div className={styles.settingsPanel}>
      <SettingsTabs setPage={setSettingsPage} tabs={tabs} />
      {settingsPage === 'sales-department' && <SalesDepartment />}
      {settingsPage === 'decor' && <Decor />}
      {settingsPage === 'behavior' && <Behavior />}
      {settingsPage === 'chat' && <Chat />}
      {settingsPage === 'call-settings' && <CallSettings />}
      {settingsPage === 'widget-code' && <WidgetCode />}
    </div>
  )
}
