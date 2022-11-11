import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components'
import { Heading, WidgetSettings, WidgetsTable } from '../../page-components'
import { setNewWidgetModal } from '../../redux/modals/slice'
import { selectWidgetSettings } from '../../redux/pages/selector'
import { Buttons } from '../../types/buttons'

import styles from './Widgets.module.scss'

export const Widgets = () => {
  const widgetSettings = useSelector(selectWidgetSettings)
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
