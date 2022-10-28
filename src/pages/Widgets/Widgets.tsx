import { useState } from 'react'
import { Button } from '../../components'
import { Heading, WidgetSettings, WidgetsTable } from '../../page-components'
import { Buttons } from '../../types/buttons'

import styles from './Widgets.module.scss'

export const Widgets = () => {
  const [addWidget, setAddWidget] = useState<boolean>(false)

  const heading = (
    <div className={styles.heading}>
      <p>Виджеты</p>
      <Button
        onClick={() => setAddWidget(true)}
        className={styles.add}
        type={Buttons.Add}
      >
        Добавить виджет
      </Button>
    </div>
  )

  return (
    <div className={styles.widgets}>
      {!addWidget && (
        <>
          <Heading heading={heading} />
          <WidgetsTable className={styles.table} />
        </>
      )}
      {addWidget && (
        <>
          <Heading heading="Виджеты" />
          <WidgetSettings />
        </>
      )}
    </div>
  )
}
