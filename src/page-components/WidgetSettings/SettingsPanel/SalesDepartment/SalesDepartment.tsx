import { Reorder } from 'framer-motion'
import { ReactSVG } from 'react-svg'
import { SettingsSection } from '../SettingsSection/SettingsSection'
import { WorkTimeTable } from './WorkTimeTable.tsx/WorkTimeTable'
import styles from './SalesDepartment.module.scss'
import { Buttons } from '../../../../types/buttons'
import { Buttons as Bottom } from '../Buttons/Buttons'
import drag from '../../../../assets/icons/drag.svg'
import {
  Button,
  DragPhone,
  Explanation,
  Select,
  Toggle,
} from '../../../../components'
import { useState } from 'react'
import { Row } from '../Row/Row'
import { SelectWrapper } from '../../../../components/SelectWrapper/SelectWrapper'

const defaultClients = [
  { id: 1, name: 'ClientName', number: +71234567890 },
  { id: 2, name: 'ClientName2', number: +71234567890 },
  { id: 3, name: 'ClientName3', number: +71234567890 },
]

export const SalesDepartment = () => {
  const [clients, setClients] = useState(defaultClients)

  const desc = (
    <>
      <span>
        Укажите список номеров для приема звонков с сайта. Дозвон будет
        производиться по списку сверху вниз. Порядок номеров можно менять
        потащив за <ReactSVG style={{ display: 'inline-block' }} src={drag} />{' '}
        около номера
      </span>
    </>
  )

  const addClient = () => {
    const id = clients.length + 1
    const newClient = { id: id, name: '', number: 0 }
    setClients((prev) => [...prev, newClient])
  }

  return (
    <div className={styles.salesDepartment}>
      <SettingsSection
        title='Номер телефона для приема звонкой'
        description={desc}
      >
        <div className={styles.phones}>
          <Reorder.Group
            as='ul'
            axis='y'
            values={clients}
            onReorder={setClients}
          >
            {clients.map((client, index) => (
              <Reorder.Item key={index} value={client}>
                <DragPhone
                  clientname={client.name}
                  clientphone={client.number}
                  position={index + 1}
                />
              </Reorder.Item>
            ))}
          </Reorder.Group>
          <p>
            Можно использовать сотовые и городские номера (через 7 или 8), а
            также sip номера
          </p>

          <Button onClick={addClient} type={Buttons.Add}>
            Добавить еще номер
          </Button>
        </div>
      </SettingsSection>
      <SettingsSection title='Как звонить на номера для приема звонков?'>
        <div className={styles.callMethod}>
          <div>
            <p>Способ дозвона</p>
            <SelectWrapper className={styles.select} variant='gray'>
              <Select
                className={styles.select}
                options={['По количеству звонков', 'По порядку']}
              />
            </SelectWrapper>
          </div>
          <div className={styles.desc}>
            <p>
              “По порядку” - дозвон на ваши номера будет производиться по
              порядку сверху в низ.
            </p>
            <p>
              “По количеству звонков” - звонки будут распределяться так, что бы
              все номера получили равное кол-во звонков за день.
            </p>
          </div>
        </div>
      </SettingsSection>
      <SettingsSection
        title='График работы отдела продаж'
        description='Укажите время работы вашего отдела продаж. В рабочее время виджет соеденять потенциальных клиентов с продажниками, а в нерабочее и выходные дни - будет собирать телефоны.'
      >
        <div className={styles.workTime}>
          <Row title='Часовой пояс виджета'>
            <SelectWrapper className={styles.select} variant='gray'>
              <Select
                className={styles.select}
                options={['GMT+03:00 - Москва, Санкт-Петербург']}
              />
            </SelectWrapper>
          </Row>
          <Row title='Единый график работы в будни'>
            <div>
              <Toggle className={styles.toggle} mode='on' />
              <Explanation
                className={styles.exp}
                text='Если у вас разное рабочее время по дням недели, отключите эту опцию.'
              />
            </div>
          </Row>
          <Row title='Учитывать праздники'>
            <div>
              <Toggle className={styles.toggle} mode='off' />
              <Explanation
                className={styles.exp}
                text='Если включено, то в праздники, попавшие неа будни, виджет будет использовать выходной день'
              />
            </div>
          </Row>
        </div>
        <WorkTimeTable />
      </SettingsSection>
      <Bottom />
    </div>
  )
}
