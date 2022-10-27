import { ReactSVG } from 'react-svg'
import { Button, Input } from '../../components'
import styles from './Register.module.scss'

import close from '../../assets/icons/close.svg'

export const Register = () => {
  return (
    <div className={styles.register}>
      <ReactSVG className={styles.close} src={close} />
      <div className={styles.wrapper}>
        <p className={styles.title}>Регистрация</p>
        <p className={styles.description}>
          После регистрации вы получите: <br />
          10 минут связи - бесплатно
        </p>
        <form className={styles.form}>
          <Input type="email" placeholder="Ваш Email" />
          <Input type="text" placeholder="Ваше имя" />
          <Input type="text" placeholder="Адрес вашего сайта" />
          <Input
            type="phone"
            placeholder="Ваш телефон (на него будут поступать звоноки с сайта)"
          />
          <Input type="password" placeholder="Придумайте пароль" />
          <Button className={styles.button}>Зарегестрироваться</Button>
        </form>
      </div>
    </div>
  )
}
