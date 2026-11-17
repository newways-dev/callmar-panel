import clsx from 'clsx'
import { useState, DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { Badge, Button, Lable, Toggle } from '../../components'
import { DemoWidget, demoWidgets } from '../../helpers/demoData'
import { Buttons } from '../../types/buttons'
import { BadgeType } from '../../types/badge'
import { Cell } from '../Row/Cell/Cell'
import { Row } from '../Row/Row'
import styles from './WidgetsTable.module.scss'

export interface WidgetsTableProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const WidgetRow = ({ widget }: { widget: DemoWidget }) => {
  const [toggle, setToggle] = useState<'on' | 'off'>(
    widget.enabled ? 'on' : 'off'
  )

  return (
    <Row className={styles.row} table="widgets">
      <Cell className={styles.website}>{widget.site}</Cell>
      <Cell className={styles.status}>
        <Badge variant={widget.installed ? BadgeType.Success : BadgeType.Alert} />
        <Badge variant={BadgeType.Search} />
        <Badge variant={BadgeType.Instruction} />
      </Cell>
      <Cell className={styles.settings}>
        <Badge variant={BadgeType.Settings} />
      </Cell>
      <Cell className={styles.widget}>
        <div>
          <Lable mode={toggle} />
          <Toggle
            onClick={() => setToggle(toggle === 'off' ? 'on' : 'off')}
            mode={toggle}
          />
        </div>
      </Cell>
      <Cell className={styles.delete}>
        <Button type={Buttons.Delete} />
      </Cell>
    </Row>
  )
}

export const WidgetsTable = ({ className }: WidgetsTableProps) => {
  const { t } = useTranslation()

  return (
    <div className={clsx(styles.widgetsTable, className)}>
      <div className={styles.top}>
        <span>{t('Сайт')}</span>
        <span>{t('Статус установки')}</span>
        <span>{t('Настройки')}</span>
        <span>{t('Вкл./выкл. виджет')}</span>
        <span />
      </div>

      <div className={styles.rowsWrapper}>
        <div className={styles.rows}>
          {demoWidgets.map((widget) => (
            <WidgetRow key={widget.id} widget={widget} />
          ))}
        </div>
      </div>
    </div>
  )
}
