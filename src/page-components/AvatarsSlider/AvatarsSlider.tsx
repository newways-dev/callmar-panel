import styles from './AvatarsSlider.module.scss'
import { useState } from 'react'
import left from '../../assets/icons/left.svg'
import right from '../../assets/icons/right.svg'
import { ReactSVG } from 'react-svg'

import { avatars } from '../../assets/images/avatars'

export const AvatarsSlider = () => {
  const [active, setActive] = useState<number>(0)

  return (
    <div className={styles.avatarSlider}>
      <p className={styles.title}>
        Выберите аватарку для оператора из стандартных:
      </p>
      <div className={styles.wrapper}>
        <ReactSVG src={left} />
        <ul className={styles.list}>
          {avatars.map((avatar, index) => (
            <li
              onClick={() => setActive(index)}
              key={index}
              className={styles.item}
            >
              <img src={avatar} className={styles.img} alt='' />
              <input checked={index === active} type='radio' />
            </li>
          ))}
        </ul>
        <ReactSVG src={right} />
      </div>
    </div>
  )
}
