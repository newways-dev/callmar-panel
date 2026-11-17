import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { ReactSVG } from 'react-svg'
import { setOperatorDataModal } from '../../../redux/modals/slice'
import styles from './OperatorData.module.scss'

import close from '../../../assets/icons/close-modal.svg'
import { ModalButtons } from '../../ModalButtons/ModalButtons'

export const OperatorData = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  return (
    <div className={styles.operatorData}>
      <div className={styles.title}>
        <p>{t('Данные оператора для приложения')}</p>
        <ReactSVG
          onClick={() => dispatch(setOperatorDataModal(false))}
          src={close}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <p>
            {t(
              'Эти данные оператор 1 должен использовать для входа в чат приложения оператора. Само приложение можно скачать внизу страницы настроек чата или вы можете'
            )}{' '}
            <span>
              {t('отправить логин/пароль с инструкциями оператору на Email.')}
            </span>
          </p>
        </div>
        <div className={styles.rows}>
          <div className={styles.row}>
            <p className={styles.rowTitle}>{t('Логин оператора')}</p>
            <div>
              <input />
              <p>{t('Это логин для приложения оператора.')}</p>
            </div>
          </div>
          <div className={styles.row}>
            <p className={styles.rowTitle}>{t('Пароль оператора')}</p>
            <div>
              <input type="password" />
              <p>{t('Это пароль для приложения оператора.')}</p>
            </div>
          </div>
          <div className={styles.row}>
            <p className={styles.rowTitle}>
              {t('Укажите Email сотрудника, куда отправить данные')}
            </p>
            <div>
              <input />
              <p>
                {t(
                  'На Email будут высланы данные для оператора (его логин и пароль), а также ссылки на скачивание приложений и инструкции по их настройке.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ModalButtons action={t('Отправить на Email')} />
    </div>
  )
}
