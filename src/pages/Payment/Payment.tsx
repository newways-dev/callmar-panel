import { useTranslation } from 'react-i18next'
import { Button, Select } from '../../components'
import { SelectWrapper } from '../../components/SelectWrapper/SelectWrapper'
import { SettingsSection } from '../../page-components/WidgetSettings/SettingsPanel/SettingsSection/SettingsSection'
import { Card } from './Card/Card'
import styles from './Payment.module.scss'

export const Payment = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.payment}>
      <SettingsSection title={t('Оплата сервиса')}>
        <div className={styles.tariffs}>
          <Card
            title={t('Базовый')}
            time={t('3 месяца')}
            price={t('799 руб./мес.')}
            discount={t('без скидки')}
          />
          <Card
            time={t('6 месяцев')}
            title={t('Оптимальный')}
            price={t('599 руб./мес.')}
            discount={t('скидка 25%')}
          />
          <Card
            time={t('12 месяцев')}
            title={t('Премиум')}
            price={t('399 руб./мес.')}
            discount={t('скидка 50%')}
          />
        </div>
        <div className={styles.rows}>
          <div className={styles.row}>
            <p>{t('Выберите тариф')}</p>
            <SelectWrapper className={styles.select} variant="red">
              <Select
                options={[
                  t('Без тарифа'),
                  t('Базовый на 3 месяца'),
                  t('Оптимальный на 6 месяцев'),
                  t('Премиум на 12 месяцев'),
                ]}
              />
            </SelectWrapper>
          </div>
          <div className={styles.row}>
            <p>{t('Выберите пакет минут')}</p>
            <div>
              <SelectWrapper className={styles.select} variant="red">
                <Select
                  options={[
                    t('Без пакета минут'),
                    t('50 минут - 200 руб.'),
                    t('100 минут - 400 руб.'),
                    t('200 минут - 800 руб.'),
                    t('300 минут - 1200 руб.'),
                    t('400 минут - 1600 руб.'),
                    t('500 минут - 2000 руб.'),
                  ]}
                />
              </SelectWrapper>
              <p className={styles.packet}>
                {t('Пакет не сгорает по истечении срока действия тарифа')}
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <p>{t('Выберите количество операторов для онлайн-чата')}</p>
            <SelectWrapper className={styles.select} variant="red">
              <Select
                options={[
                  t('1 оператор - Бесплатно'),
                  t('2 оператора - 300 руб./мес.'),
                  t('3 оператора - 550 руб./мес.'),
                  t('4 оператора - 800 руб./мес.'),
                  t('5 операторов - 1000 руб./мес.'),
                  t('Без ограничений - 2000 руб./мес.'),
                ]}
              />
            </SelectWrapper>
          </div>
          <div className={styles.row}>
            <p>{t('Итого к оплате')}</p>
            <ul>
              <li>{t('Тариф Базовый на 3 месяца: 1797 руб.')}</li>
              <li>{t('1 оператор на 3 месяца - Бесплатно')}</li>
              <li>{t('50 минут (по РФ): 200 руб.')}</li>
            </ul>
          </div>
        </div>
        <div className={styles.total}>
          <div className={styles.price}>{t('1997 руб.')}</div>
          <Button>{t('Оплатить')}</Button>
        </div>
      </SettingsSection>
    </div>
  )
}
