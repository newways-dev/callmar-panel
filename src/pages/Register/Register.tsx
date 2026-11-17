import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import { Button, Input, LanguageSwitcher } from '../../components'
import styles from './Register.module.scss'

import close from '../../assets/icons/close.svg'
import { Settings } from './Settings/Settings'

export const Register = () => {
  const { t } = useTranslation()
  const [clicked, setClicked] = useState<boolean>(false)

  return clicked ? (
    <Settings />
  ) : (
    <div className={styles.register}>
      <LanguageSwitcher floating />
      <ReactSVG className={styles.close} src={close} />
      <div className={styles.wrapper}>
        <p className={styles.title}>{t('Регистрация')}</p>
        <p className={styles.description}>
          {t('После регистрации вы получите:')} <br />
          {t('10 минут связи - бесплатно')}
        </p>
        <form className={styles.form}>
          <Input type='email' placeholder={t('Ваш Email')} />
          <Input type='text' placeholder={t('Ваше имя')} />
          <Input type='text' placeholder={t('Адрес вашего сайта')} />
          <Input
            type='phone'
            placeholder={t(
              'Ваш телефон (на него будут поступать звонки с сайта)'
            )}
          />
          <Input type='password' placeholder={t('Придумайте пароль')} />
          <Button onClick={() => setClicked(true)} className={styles.button}>
            {t('Зарегистрироваться')}
          </Button>
        </form>
      </div>
    </div>
  )
}
