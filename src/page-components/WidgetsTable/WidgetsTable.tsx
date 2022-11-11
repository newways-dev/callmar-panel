import clsx from 'clsx'
import { useState, DetailedHTMLProps, HTMLAttributes } from 'react'
import { Badge, Button, Lable, Toggle } from '../../components'
import { Buttons } from '../../types/buttons'
import { BadgeType } from '../../types/badge'
import { Cell } from '../Row/Cell/Cell'
import { Row } from '../Row/Row'
import styles from './WidgetsTable.module.scss'

export interface WidgetsTableProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const WidgetsTable = ({ className }: WidgetsTableProps) => {
  const [toggle, setToggle] = useState<'on' | 'off'>('on')

  return (
    <div className={clsx(styles.widgetsTable, className)}>
      <div className={styles.top}>
        <span>Сайт</span>
        <span>Статус установки</span>
        <span>Настройки</span>
        <span>Вкл./выкл. виджет</span>
        <span />
      </div>

      <div className={styles.rowsWrapper}>
        <div className={styles.rows}>
          <Row className={styles.row} table='widgets'>
            <Cell className={styles.website}>tehnix.su</Cell>
            <Cell className={styles.status}>
              <Badge variant={BadgeType.Success} />
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
          <Row className={styles.row} table='widgets'>
            <Cell className={styles.website}>tehnix.su</Cell>
            <Cell className={styles.status}>
              <Badge variant={BadgeType.Success} />
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
        </div>
      </div>
    </div>
  )
}
