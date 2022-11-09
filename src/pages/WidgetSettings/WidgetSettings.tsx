import { Section, SidebarSettings } from '../../page-components'
import styles from './WidgetSettings.module.scss'

export const WidgetSettings = () => {
  return (
    <div className={styles.widgetSettings}>
      <div className={styles.previewMode}>
        <p>Режим предпросмотра</p>
        <p className={styles.url}>http://tehnix.su</p>
      </div>
      <div className={styles.wrapper}>
        <SidebarSettings title='Настройки виджета'>
          <Section title='Таймер обратного звонка'>
            <div className={styles.wrapper}>3223</div>
          </Section>
          <Section title='Настройка текста'>
            <div className={styles.wrapper}>4343</div>
          </Section>
        </SidebarSettings>
        <div className={styles.preview}>
          <div className={styles.showcase}>323</div>
          <div className={styles.background}>32</div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
