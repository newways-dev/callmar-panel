import { Button, Toggle } from '../../../../../components'
import styles from './Operator.module.scss'

import photo from '../../../../../assets/images/photo.png'
import card from '../../../../../assets/icons/card.svg'
import login from '../../../../../assets/icons/login.svg'
import avatar from '../../../../../assets/icons/avatar.svg'
import { ReactSVG } from 'react-svg'
import { Colors } from '../../../../../types/colors'

export const Operator = () => {
  return (
    <div className={styles.operator}>
      <div className={styles.profile}>
        <Toggle mode='on' />
        <img src={photo} alt='' />
        <div className={styles.settings}>
          <div className={styles.top}>
            <p className={styles.name}>Оператор 1</p>
            <Button className={styles.edit}>изменить</Button>
            <Button className={styles.delete}>удалить</Button>
          </div>
          <div className={styles.bottom}>
            <Button className={styles.login}>
              <ReactSVG src={login} />
              логин и пароль для приложения
            </Button>
            <Button className={styles.avatar}>
              <ReactSVG src={avatar} />
              Настроить аватар
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.payment}>
        <p>
          Сейчас Вам доступен 1 оператор Если вам нужно больше операторов, вы
          можете оплатить нужное кол-во. Оплаченные операторы будут доступны на
          всех ваших сайтах.
        </p>
        <Button className={styles.pay} variant={Colors.Red}>
          <ReactSVG src={card} />
          Оплатить дополнительных операторов
        </Button>
      </div>
    </div>
  )
}
