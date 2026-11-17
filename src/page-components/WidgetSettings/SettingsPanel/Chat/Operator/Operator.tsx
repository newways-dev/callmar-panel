import { Button, Toggle } from '../../../../../components'
import styles from './Operator.module.scss'

import card from '../../../../../assets/icons/card.svg'
import login from '../../../../../assets/icons/login.svg'
import avatar from '../../../../../assets/icons/avatar.svg'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import { Colors } from '../../../../../types/colors'
import { useDispatch, useSelector } from 'react-redux'
import {
  setAvatarModal,
  setOperatorDataModal,
  setOperatorPaymentModal,
} from '../../../../../redux/modals/slice'

import { avatars } from '../../../../../assets/images/avatars'
import { selectAvatar } from '../../../../../redux/avatar/selector'

export const Operator = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const avatarImg = useSelector(selectAvatar)

  const avatarPhoto = avatars[avatarImg]

  return (
    <div className={styles.operator}>
      <div className={styles.profile}>
        <Toggle mode="on" />
        <img src={avatarPhoto} alt="" />
        <div className={styles.settings}>
          <div className={styles.top}>
            <p className={styles.name}>{t('Оператор 1')}</p>
            <Button className={styles.edit}>{t('изменить')}</Button>
            <Button className={styles.delete}>{t('удалить')}</Button>
          </div>
          <div className={styles.bottom}>
            <Button
              onClick={() => dispatch(setOperatorDataModal(true))}
              className={styles.login}
            >
              <ReactSVG src={login} />
              {t('логин и пароль для приложения')}
            </Button>
            <Button
              onClick={() => dispatch(setAvatarModal(true))}
              className={styles.avatar}
            >
              <ReactSVG src={avatar} />
              {t('Настроить аватар')}
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.payment}>
        <p>
          {t(
            'Сейчас вам доступен 1 оператор. Если вам нужно больше операторов, вы можете оплатить нужное количество. Оплаченные операторы будут доступны на всех ваших сайтах.'
          )}
        </p>
        <Button
          onClick={() => dispatch(setOperatorPaymentModal(true))}
          className={styles.pay}
          variant={Colors.Red}
        >
          <ReactSVG src={card} />
          {t('Оплатить дополнительных операторов')}
        </Button>
      </div>
    </div>
  )
}
