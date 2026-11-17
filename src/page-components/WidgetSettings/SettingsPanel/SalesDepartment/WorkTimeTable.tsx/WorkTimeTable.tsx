import { useTranslation } from 'react-i18next'
import { Input, Range } from '../../../../../components'
import { Cell } from '../../../../Row/Cell/Cell'
import { Row } from '../../../../Row/Row'
import styles from './WorkTimeTable.module.scss'

export const WorkTimeTable = () => {
  const { t } = useTranslation()

  const hours = t('с {{from}} по {{to}}', { from: '07:15', to: '21:15' })

  return (
    <div className={styles.workTimeTable}>
      <div className={styles.top}>
        <span>{t('Дни недели')}</span>
        <span>{t('График')}</span>
        <div>
          <span className={styles.settingsTime}>
            {t('Настройка времени работы')}
          </span>
          <span className={styles.preview}>
            {t('Предпросмотр графика работы')}
          </span>
        </div>
      </div>
      <Row className={styles.row} table="work-time">
        <Cell className={styles.cell}>
          <ul className={styles.weekDays}>
            <li>
              <Input type="checkbox" />
              <span>{t('Понедельник')}</span>
            </li>
            <li>
              <Input type="checkbox" />
              <span>{t('Вторник')}</span>
            </li>
            <li>
              <Input type="checkbox" />
              <span>{t('Среда')}</span>
            </li>
            <li>
              <Input type="checkbox" />
              <span>{t('Четверг')}</span>
            </li>
            <li>
              <Input type="checkbox" />
              <span>{t('Пятница')}</span>
            </li>
          </ul>
        </Cell>
        <Cell className={styles.cell}>
          <div className={styles.graph}>
            <div className={styles.days}>
              <span className={styles.day}>{t('Пн')}</span>
              <span className={styles.day}>{t('Вт')}</span>
              <span className={styles.day}>{t('Ср')}</span>
              <span className={styles.day}>{t('Чт')}</span>
              <span className={styles.day}>{t('Пт')}</span>
            </div>
            <span className={styles.workTime}>{hours}</span>
          </div>
        </Cell>
        <Cell className={styles.cell}>
          <Range />
        </Cell>
      </Row>
      <Row className={styles.row} table="work-time">
        <Cell className={styles.cell}>
          <ul className={styles.weekDays}>
            <li>
              <Input type="checkbox" />
              <span>{t('Суббота')}</span>
            </li>
          </ul>
        </Cell>
        <Cell className={styles.cell}>
          <span className={styles.workTime}>{hours}</span>
        </Cell>
        <Cell className={styles.cell}>
          <Range />
        </Cell>
      </Row>
      <Row className={styles.row} table="work-time">
        <Cell className={styles.cell}>
          <ul className={styles.weekDays}>
            <li>
              <Input type="checkbox" />
              <span>{t('Воскресенье')}</span>
            </li>
          </ul>
        </Cell>
        <Cell className={styles.cell}>
          <span className={styles.workTime}>{hours}</span>
        </Cell>
        <Cell className={styles.cell}>
          <Range />
        </Cell>
      </Row>
    </div>
  )
}
