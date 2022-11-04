import { Input, Range } from '../../../../../components'
import { Cell } from '../../../../Row/Cell/Cell'
import { Row } from '../../../../Row/Row'
import styles from './WorkTimeTable.module.scss'

export const WorkTimeTable = () => {
  return (
    <div className={styles.workTimeTable}>
      <div className={styles.top}>
        <span>Дни недели</span>
        <span>График</span>
        <div>
          <span className={styles.settingsTime}>Настройка времени работы</span>
          <span className={styles.preview}>Предпросмотр графика работы</span>
        </div>
      </div>
      <Row className={styles.row} table="work-time">
        <Cell className={styles.cell}>
          <ul className={styles.weekDays}>
            <li>
              <Input type="checkbox" />
              <span>Понедельник</span>
            </li>
            <li>
              <Input type="checkbox" />
              <span>Вторник</span>
            </li>
            <li>
              <Input type="checkbox" />
              <span>Среда</span>
            </li>
            <li>
              <Input type="checkbox" />
              <span>Четверг</span>
            </li>
            <li>
              <Input type="checkbox" />
              <span>Пятница</span>
            </li>
          </ul>
        </Cell>
        <Cell className={styles.cell}>
          <div className={styles.graph}>
            <div className={styles.days}>
              <span className={styles.day}>Пн</span>
              <span className={styles.day}>Вт</span>
              <span className={styles.day}>Ср</span>
              <span className={styles.day}>Чт</span>
              <span className={styles.day}>Пт</span>
            </div>
            <span className={styles.workTime}>с 07:15 по 21:15</span>
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
              <span>Суббота</span>
            </li>
          </ul>
        </Cell>
        <Cell className={styles.cell}>
          <span className={styles.workTime}>с 07:15 по 21:15</span>
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
              <span>Воскресенье</span>
            </li>
          </ul>
        </Cell>
        <Cell className={styles.cell}>
          <span className={styles.workTime}>с 07:15 по 21:15</span>
        </Cell>
        <Cell className={styles.cell}>
          <Range />
        </Cell>
      </Row>
    </div>
  )
}
