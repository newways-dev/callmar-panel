import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import { useDispatch } from 'react-redux'
import { setOperatorPaymentModal } from '../../../redux/modals/slice'
import styles from './OperatorPayment.module.scss'
import close from '../../../assets/icons/close-modal.svg'
import { ModalButtons } from '../../ModalButtons/ModalButtons'
import { Explanation, Select } from '../../../components'
import { SelectWrapper } from '../../../components/SelectWrapper/SelectWrapper'
import { formatDate } from '../../../helpers/demoData'

const DEMO_MONTHS = 3

export const OperatorPayment = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const countOptions = [
    t('2 оператора (1 + 1 бесплатно) - 300 руб./мес.'),
    t('3 оператора (2 + 1 бесплатно) - 550 руб./мес.'),
    t('4 оператора (3 + 1 бесплатно) - 800 руб./мес.'),
    t('5 операторов (4 + 1 бесплатно) - 1000 руб./мес.'),
    t('Без ограничений - 2000 руб./мес.'),
  ]

  const periodOptions = [t('3 месяца'), t('6 месяцев'), t('12 месяцев')]

  const until = new Date()
  until.setMonth(until.getMonth() + DEMO_MONTHS)

  return (
    <div className={styles.operatorPayment}>
      <div className={styles.title}>
        <p>{t('Оплата дополнительных операторов')}</p>
        <ReactSVG
          onClick={() => dispatch(setOperatorPaymentModal(false))}
          src={close}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.count}>
          <p>{t('Выберите количество операторов')}</p>
          <div className={styles.selectWrapper}>
            <SelectWrapper className={styles.select} variant="red">
              <Select options={countOptions} />
            </SelectWrapper>
            <Explanation
              text={t(
                'Выберите общее количество операторов для оплаты. Сейчас у вас 1 оператор, если вам нужен еще 1, то нужно выбрать 2.'
              )}
            />
          </div>
        </div>
        <div className={styles.period}>
          <p>{t('Период оплаты')}</p>
          <div className={styles.selectWrapper}>
            <SelectWrapper variant="red">
              <Select className={styles.select} options={periodOptions} />
            </SelectWrapper>
          </div>
        </div>
        <div className={styles.amount}>
          <p>{t('Итог к оплате:')}</p>
          <p className={styles.price}>{t('900 руб.')}</p>
        </div>
        <div className={styles.description}>
          <p>
            {t(
              'После оплаты вам будет доступно 3 оператора на 3 месяца (до {{date}}).',
              { date: formatDate(until) }
            )}
          </p>
        </div>
      </div>
      <ModalButtons action={t('Перейти к оплате')} />
    </div>
  )
}
