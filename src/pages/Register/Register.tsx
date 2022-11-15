import { useState } from 'react'
import { ReactSVG } from 'react-svg'
import { Button, Input } from '../../components'
import styles from './Register.module.scss'

import close from '../../assets/icons/close.svg'
import { Settings } from './Settings/Settings'

export const Register = () => {
  const [clicked, setClicked] = useState<boolean>(false)

  return clicked ? (
    <Settings />
  ) : (
    <div className={styles.register}>
      <ReactSVG className={styles.close} src={close} />
      <div className={styles.wrapper}>
        <p className={styles.title}>Регистрация</p>
        <p className={styles.description}>
          После регистрации вы получите: <br />
          10 минут связи - бесплатно
        </p>
        <form className={styles.form}>
          <Input type='email' placeholder='Ваш Email' />
          <Input type='text' placeholder='Ваше имя' />
          <Input type='text' placeholder='Адрес вашего сайта' />
          <Input
            type='phone'
            placeholder='Ваш телефон (на него будут поступать звоноки с сайта)'
          />
          <Input type='password' placeholder='Придумайте пароль' />
          <Button onClick={() => setClicked(true)} className={styles.button}>
            Зарегестрироваться
          </Button>
        </form>
      </div>
    </div>
  )
}
