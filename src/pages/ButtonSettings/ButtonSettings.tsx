import { ColorsList, Select, Toggle } from '../../components'
import { Section, SidebarSettings } from '../../page-components'
import styles from './ButtonSettings.module.scss'

import round_square from '../../assets/images/widget/round-square.png'
import round_with_home_phone from '../../assets/images/widget/round-with-home-phone.png'
import round_with_phone from '../../assets/images/widget/round-with-phone.png'
import square_with_phone from '../../assets/images/widget/square-with-phone.png'
import clsx from 'clsx'

export const ButtonSettings = () => {
  const bottomRight = true
  const bottomLeft = false
  const topLeft = false
  const topRight = false

  return (
    <div className={styles.buttonSettings}>
      <SidebarSettings title='Настройки кнопки'>
        <div className={styles.wrapper}>
          <div className={styles.style}>
            <p className={styles.settingTitle}>Стиль кнопки</p>
            <Select
              className={styles.select}
              variant='gray'
              options={['Круглая кнопка с трубкой']}
              placeholder='Круглая кнопка с трубкой'
            />
          </div>
          <div className={styles.color}>
            <p className={styles.settingTitle}>Цвет кнопки</p>
            <ColorsList
              className={styles.colors}
              colors={[
                'Gray',
                'Blue',
                'Green',
                'LightGreen',
                'LightPurple',
                'LightRed',
                'Orange',
              ]}
            />
          </div>
          <div className={styles.position}>
            <p className={styles.settingTitle}>Расположение на сайте</p>
            <Select
              className={styles.select}
              placeholder='Низ-право'
              options={['Низ-право', 'Низ-лево', 'Верх-право', 'Верх-лево']}
              variant='gray'
            />
          </div>
        </div>
        <Section title='Подсказка для кнопки'>
          <div className={styles.wrapper}>
            <div className={styles.hint}>
              <p>Показывать подсказку при наведении на кнопку</p>
              <Toggle mode='on' />
            </div>
          </div>
        </Section>
      </SidebarSettings>
      <div
        className={clsx(styles.preview, {
          [styles.bottomRight]: bottomRight,
          [styles.bottomLeft]: bottomLeft,
          [styles.topLeft]: topLeft,
          [styles.topRight]: topRight,
        })}
      >
        <div className={styles.widgets}>
          <div className={styles.widget}>
            <div className={styles.message}>
              <p>Есть вопросы? Нажмите и мы перезвоним вам за 27 секунд!</p>
            </div>
            <img src={round_square} alt='' />
          </div>
          <div className={styles.widget}>
            <div className={styles.message}>
              <p>Есть вопросы? Нажмите и мы перезвоним вам за 27 секунд!</p>
            </div>
            <img src={square_with_phone} alt='' />
          </div>
          <div className={styles.widget}>
            <div className={styles.message}>
              <p>Есть вопросы? Нажмите и мы перезвоним вам за 27 секунд!</p>
            </div>
            <img src={round_with_home_phone} alt='' />
          </div>
          <div className={styles.widget}>
            <div className={styles.message}>
              <p>Есть вопросы? Нажмите и мы перезвоним вам за 27 секунд!</p>
            </div>
            <img src={round_with_phone} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}
