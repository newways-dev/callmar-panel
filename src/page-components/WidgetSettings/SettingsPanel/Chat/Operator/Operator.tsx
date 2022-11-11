import { Button, Toggle } from '../../../../../components'
import styles from './Operator.module.scss'

import card from '../../../../../assets/icons/card.svg'
import login from '../../../../../assets/icons/login.svg'
import avatar from '../../../../../assets/icons/avatar.svg'
import { ReactSVG } from 'react-svg'
import { Colors } from '../../../../../types/colors'
import { useDispatch, useSelector } from 'react-redux'
import { setAvatarModal } from '../../../../../redux/modals/slice'

import { avatars } from '../../../../../assets/images/avatars'
import { selectAvatar } from '../../../../../redux/avatar/selector'

export const Operator = () => {
  const dispatch = useDispatch()
  const avatarImg = useSelector(selectAvatar)

  const avatarPhoto = avatars[avatarImg]

  return (
    <div className={styles.operator}>
      <div className={styles.profile}>
        <Toggle mode='on' />
        <img src={avatarPhoto} alt='' />
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
            <Button
              onClick={() => dispatch(setAvatarModal(true))}
              className={styles.avatar}
            >
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
