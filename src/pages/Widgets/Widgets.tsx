import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Button } from '../../components'
import { Heading, WidgetSettings, WidgetsTable } from '../../page-components'
import { setNewWidgetModal } from '../../redux/modals/slice'
import { Buttons } from '../../types/buttons'

import styles from './Widgets.module.scss'

export const Widgets = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const heading = (
    <div className={styles.heading}>
      <p>{t('Виджеты')}</p>
      <Button
        onClick={() => dispatch(setNewWidgetModal(true))}
        className={styles.add}
        type={Buttons.Add}
      >
        {t('Добавить виджет')}
      </Button>
    </div>
  )

  return (
    <div className={styles.widgets}>
      <Heading heading={heading} />
      <WidgetsTable className={styles.table} />
    </div>
  )
}

/** Settings of a single widget, shown inside the main layout. */
export const WidgetSettingsView = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.widgets}>
      <Heading heading={t('Виджеты')} />
      <WidgetSettings />
    </div>
  )
}
