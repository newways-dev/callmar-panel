import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import styles from './Settings.module.scss'
import { Button, LanguageSwitcher } from '../../../components'

import close from '../../../assets/icons/close.svg'
import callmar from '../../../assets/images/callmar-img.png'
import yellow from '../../../assets/images/yellow-shape.png'
import send from '../../../assets/icons/send.svg'
import shape1 from '../../../assets/icons/shape-1.svg'
import shape2 from '../../../assets/icons/shape-2.svg'
import shape3 from '../../../assets/icons/shape-3.svg'
import { Link } from 'react-router-dom'

export const Settings = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.settings}>
      <LanguageSwitcher floating />
      <div className={styles.close}>
        <Link to='/login'>
          <ReactSVG src={close} />
        </Link>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.heading}>{t('Как настроить виджет Callmar')}</p>
        <div className={styles.options}>
          <div className={styles.option}>
            <p className={styles.title}>{t('Настройте сами')}</p>
            <img className={styles.callmar} src={callmar} alt='' />
            <p className={styles.setbyyou}>
              {t('Вы можете настроить виджеты самостоятельно.')}
            </p>
            <Button className={styles.settingButton}>{t('НАСТРОИТЬ')}</Button>
          </div>
          <div className={styles.option}>
            <p className={styles.title}>{t('Закажите настройку')}</p>
            <p className={styles.desc}>
              {t(
                'Наши эксперты настроят продукт так, чтобы он приносил максимальное количество звонков и заявок с вашего сайта.'
              )}
            </p>
            <div className={styles.getHelp}>
              <p className={styles.saveTime}>{t('Сэкономьте своё время!')}</p>
              <p className={styles.leavePhone}>
                {t('Оставьте свой номер телефона, и мы настроим всё за вас.')}
              </p>
              <div className={styles.send}>
                <input placeholder='+7' />
                <Button>
                  <ReactSVG src={send} />
                </Button>
              </div>
            </div>
            <img className={styles.yellowShape} src={yellow} alt='' />
            <ReactSVG className={styles.shape1} src={shape1} />
            <ReactSVG className={styles.shape2} src={shape2} />
            <ReactSVG className={styles.shape3} src={shape3} />
          </div>
        </div>
      </div>
    </div>
  )
}
