import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../../components'
import { Heading, WidgetSettings, WidgetsTable } from '../../page-components'
import { setNewWidgetModal } from '../../redux/modals/slice'
import { Buttons } from '../../types/buttons'

import styles from './Widgets.module.scss'

export const Widgets = () => {
  const [widgetSettings, setWidgetSettings] = useState<boolean>(false)
  const dispatch = useDispatch()

  const heading = (
    <div className={styles.heading}>
      <p>Виджеты</p>
      <Button
        onClick={() => dispatch(setNewWidgetModal(true))}
        className={styles.add}
        type={Buttons.Add}
      >
        Добавить виджет
      </Button>
      <Button
        onClick={() => setWidgetSettings(true)}
        className={styles.settings}
      >
        Настройки виджета
      </Button>
    </div>
  )

  return (
    <div className={styles.widgets}>
      {!widgetSettings && (
        <>
          <Heading heading={heading} />
          <WidgetsTable className={styles.table} />
        </>
      )}
      {widgetSettings && (
        <>
          <Heading heading='Виджеты' />
          <WidgetSettings />
        </>
      )}
    </div>
  )
}
