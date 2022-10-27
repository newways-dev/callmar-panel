import { Button } from '../../components'
import { Heading, WidgetsTable } from '../../page-components'
import { Buttons } from '../../types/buttons'

import styles from './Widgets.module.scss'

export const Widgets = () => {
  const heading = (
    <div className={styles.heading}>
      <p>Виджеты</p>
      <Button className={styles.add} type={Buttons.Add}>
        Добавить виджет
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
