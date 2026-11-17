import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import { Button, Input, LanguageSwitcher } from '../../components'
import styles from './Login.module.scss'

import close from '../../assets/icons/close.svg'
import { Link } from 'react-router-dom'

export const Login = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.login}>
      <LanguageSwitcher floating />
      <Link to='/'>
        <ReactSVG className={styles.close} src={close} />
      </Link>
      <div className={styles.wrapper}>
        <p className={styles.title}>{t('Вход в личный кабинет')}</p>
        <form className={styles.form}>
          <Input type='email' placeholder={t('Ваш Email')} />
          <Input type='password' placeholder={t('Пароль')} />
          <Link className={styles.resetPassword} to='/'>
            {t('Забыли пароль?')}
          </Link>
          <Button className={styles.button}>{t('Войти')}</Button>
          <Link className={styles.register} to='/register'>
            {t('Регистрация')}
          </Link>
        </form>
      </div>
    </div>
  )
}
