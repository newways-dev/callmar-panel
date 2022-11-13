import { Button, Select } from '../../components'
import { SelectWrapper } from '../../components/SelectWrapper/SelectWrapper'
import { SettingsSection } from '../../page-components/WidgetSettings/SettingsPanel/SettingsSection/SettingsSection'
import { Card } from './Card/Card'
import styles from './Payment.module.scss'

export const Payment = () => {
  return (
    <div className={styles.payment}>
      <SettingsSection title="Оплата сервиса">
        <div className={styles.tariffs}>
          <Card
            title="Базовый"
            time="3 месяца"
            price="799 руб./мес."
            discount="без скидки"
          />
          <Card
            time="6 месяцев"
            title="Оптимальный"
            price="599 руб./мес."
            discount="скидка 25%"
          />
          <Card
            time="12 месяцев"
            title="Премиум"
            price="399руб./мес."
            discount="скидка 50%"
          />
        </div>
        <div className={styles.rows}>
          <div className={styles.row}>
            <p>Выберите тариф</p>
            <SelectWrapper className={styles.select} variant="red">
              <Select
                options={[
                  'Без тарифа',
                  'Базовый на 3 месяца',
                  'Оптимальный на 6 месяцев',
                  'Премиум на 12 месяцев',
                ]}
              />
            </SelectWrapper>
          </div>
          <div className={styles.row}>
            <p>Выберите пакет минут</p>
            <div>
              <SelectWrapper className={styles.select} variant="red">
                <Select
                  options={[
                    'Без пакета минут',
                    '50 минут - 200 руб.',
                    '100 минут - 400руб.',
                    '200 минут - 800руб.',
                    '300 минут - 1200руб.',
                    '400 минут - 1600руб.',
                    '500 минут - 2000руб.',
                  ]}
                />
              </SelectWrapper>
              <p className={styles.packet}>
                Пакет не сгорает по истечению срока действия тарифа
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <p>Выберите кол-во операторов для Онлайн чата</p>
            <SelectWrapper className={styles.select} variant="red">
              <Select
                options={[
                  '1 оператор - Бесплатно',
                  '2 оператора - 300 руб./мес.',
                  '3 оператора - 550 руб./мес.',
                  '4 оператора - 800 руб./мес.',
                  '5 оператора - 1000 руб./мес.',
                  'Без ограничений - 2000 руб./мес.',
                ]}
              />
            </SelectWrapper>
          </div>
          <div className={styles.row}>
            <p>Итого к оплате</p>
            <ul>
              <li>Тариф Базовый на 3 месяца : 1797 руб.</li>
              <li>1 оператор на 3 месяца - Бесплатно</li>
              <li>50 минут (по РФ) : 200 руб</li>
            </ul>
          </div>
        </div>
        <div className={styles.total}>
          <div className={styles.price}>1997 руб.</div>
          <Button>Оплатить</Button>
        </div>
      </SettingsSection>
    </div>
  )
}
