import { ReactSVG } from 'react-svg'
import { SettingsSection } from '../SettingsSection/SettingsSection'
import styles from './SalesDepartment.module.scss'

import drag from '../../../../assets/icons/drag.svg'
import { Button, DragPhone, Select } from '../../../../components'
import { Buttons } from '../../../../types/buttons'

export const SalesDepartment = () => {
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

  return (
    <div className={styles.salesDepartment}>
      <SettingsSection
        title='Номер телефона для приема звонкой'
        description={desc}
      >
        <div className={styles.phones}>
          <DragPhone position={1} />
          <DragPhone position={2} />
          <DragPhone position={3} />
          <p>
            Можно использовать сотовые и городские номера (через 7 или 8), а
            также sip номера
          </p>

          <Button type={Buttons.Add}>Добавить еще номер</Button>
        </div>
      </SettingsSection>
      <SettingsSection title='Как звонить на номера для приема звонков?'>
        <div className={styles.callMethod}>
          <div>
            <p>Способ дозвона</p>
            <Select
              className={styles.select}
              placeholder='По количеству звонков'
              variant='gray'
              options={['По количеству звонков', 'По порядку']}
            />
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
        434
      </SettingsSection>
    </div>
  )
}
