import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components'
import { DemoCall, formatDate, formatTime } from '../../helpers/demoData'
import { Colors } from '../../types/colors'
import styles from './CallsTable.module.scss'

export interface CellsTableProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  calls: DemoCall[]
}

export const CallsTable = ({ calls, className }: CellsTableProps) => {
  const { t } = useTranslation()

  return (
    <div className={clsx(styles.callsTable, className)}>
      <div className={styles.top}>
        <span>№</span>
        <span>{t('Сайт')}</span>
        <span>{t('Дата звонка')}</span>
        <span>{t('Время звонка')}</span>
        <span>{t('Номер клиента')}</span>
        <span>{t('Номер менеджера')}</span>
        <span>{t('Воспроизвести')}</span>
      </div>
      <div className={styles.rows}>
        {calls.length === 0 ? (
          <VoidRow />
        ) : (
          calls.map((call, index) => (
            <div className={styles.row} key={call.id}>
              <div className={styles.cell}>{index + 1}</div>
              <div className={styles.cell}>{call.site}</div>
              <div className={styles.cell}>{formatDate(call.date)}</div>
              <div className={styles.cell}>{formatTime(call.date)}</div>
              <div className={styles.cell}>{call.clientPhone}</div>
              <div className={styles.cell}>{call.managerPhone}</div>
              <div className={styles.cell}>
                <Button className={styles.playButton} variant={Colors.Red}>
                  Play
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

const VoidRow = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.voidRow}>
      <span className={styles.noCalls}>{t('Нет звонков за указанный период.')}</span>
      {Array.from({ length: 7 }, (_, index) => (
        <div className={styles.voidCell} key={index} />
      ))}
    </div>
  )
}
