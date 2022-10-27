import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Button } from '../../components'
import { Colors } from '../../types/colors'
import styles from './CallsTable.module.scss'

export interface CellsTableProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CallsTable = ({ className }: CellsTableProps) => {
  return (
    <div className={clsx(styles.callsTable, className)}>
      <div className={styles.top}>
        <span>№</span>
        <span>Сайт</span>
        <span>Дата звонка</span>
        <span>Время звонка</span>
        <span>Номер клиента</span>
        <span>Номер менеджера</span>
        <span>Воспроизвести</span>
      </div>
      <div className={styles.rows}>
        <VoidRow />
      </div>
    </div>
  )
}

const VoidRow = () => {
  return (
    <div className={styles.voidRow}>
      <span className={styles.noCalls}>Нет звонков за указанный период.</span>
      <div className={styles.voidCell} />
      <div className={styles.voidCell} />
      <div className={styles.voidCell} />
      <div className={styles.voidCell} />
      <div className={styles.voidCell} />
      <div className={styles.voidCell} />
      <div className={styles.voidCell}>
        <Button className={styles.play} variant={Colors.Red}>
          Play
        </Button>
      </div>
    </div>
  )
}
