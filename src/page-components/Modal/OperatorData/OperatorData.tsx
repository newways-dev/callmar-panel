import { useDispatch } from 'react-redux'
import { ReactSVG } from 'react-svg'
import { setOperatorDataModal } from '../../../redux/modals/slice'
import styles from './OperatorData.module.scss'

import close from '../../../assets/icons/close-modal.svg'
import { ModalButtons } from '../../ModalButtons/ModalButtons'

export const OperatorData = () => {
  const dispatch = useDispatch()

  return (
    <div className={styles.operatorData}>
      <div className={styles.title}>
        <p>Данные оператора для приложения</p>
        <ReactSVG
          onClick={() => dispatch(setOperatorDataModal(false))}
          src={close}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <p>
            Эти данные оператор 1 должен использовать для входа в чат приложения
            оператора. Само приложение можно скачать внизу страницы настроек
            чата или вы можете{' '}
            <span>
              {' '}
              отправить логин/пароль с инструкциями оператору на Email.
            </span>
          </p>
        </div>
        <div className={styles.rows}>
          <div className={styles.row}>
            <p className={styles.rowTitle}>Логин оператора</p>
            <div>
              <input />
              <p>Это логин для приложения оператора.</p>
            </div>
          </div>
          <div className={styles.row}>
            <p className={styles.rowTitle}>Пароль оператора</p>
            <div>
              <input type="password" />
              <p>Это пароль для приложения оператора.</p>
            </div>
          </div>
          <div className={styles.row}>
            <p className={styles.rowTitle}>
              Укажите Email сотрудника куда отправить данные
            </p>
            <div>
              <input />
              <p>
                На Email будет высланы данные для оператора (его логин и
                пароль), а так же ссылки скачивания приложений и инструкции по
                их настройке.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ModalButtons action="Отправить на Email" />
    </div>
  )
}
