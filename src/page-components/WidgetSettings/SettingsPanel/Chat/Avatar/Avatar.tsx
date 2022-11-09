import { ReactSVG } from 'react-svg'
import styles from './Avatar.module.scss'

import close from '../../../../../assets/icons/close-avatar.svg'
import drop from '../../../../../assets/icons/drop-here.svg'
import background from '../../../../../assets/images/avatar-back.png'

export const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <div className={styles.title}>
        <p>Аватарка оператора</p>
        <ReactSVG src={close} />
      </div>
      <p>Загрузите фото сотрудника</p>
      <div className={styles.dragAndDrop}>
        <img src={background} alt='' />
        <ReactSVG src={drop} />
        <p>
          Загрузите фото сотрудника, нажав сюда или перетащив файл фотографии в
          эту область. Не более 2MB в формате jpg, png или gif
        </p>
      </div>
      <div className={styles.or}>ИЛИ</div>
      <p>Выберите аватарку для оператора из стандартных:</p>
    </div>
  )
}
