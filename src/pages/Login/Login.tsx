import { ReactSVG } from 'react-svg'
import { Button, Input } from '../../components'
import styles from './Login.module.scss'

import close from '../../assets/icons/close.svg'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className={styles.login}>
      <Link to='/'>
        <ReactSVG className={styles.close} src={close} />
      </Link>
      <div className={styles.wrapper}>
        <p className={styles.title}>Вход в личный кабинет</p>
        <form className={styles.form}>
          <Input type='email' placeholder='Ваш Email' />
          <Input type='password' placeholder='Пароль' />
          <Link className={styles.resetPassword} to='/'>
            Вспомнить пароль
          </Link>
          <Button className={styles.button}>Войти</Button>
          <Link className={styles.register} to='/register'>
            Регистрация
          </Link>
        </form>
      </div>
    </div>
  )
}
