import { ReactSVG } from 'react-svg'
import { useDispatch } from 'react-redux'
import { setOperatorPaymentModal } from '../../../redux/modals/slice'
import styles from './OperatorPayment.module.scss'
import close from '../../../assets/icons/close-modal.svg'
import { ModalButtons } from '../../ModalButtons/ModalButtons'
import { Explanation, Select } from '../../../components'
import { SelectWrapper } from '../../../components/SelectWrapper/SelectWrapper'

export const OperatorPayment = () => {
  const dispatch = useDispatch()

  const countOptions = [
    '2 оператора (1 + 1 бесплатно) - 300 руб./мес.',
    '3 оператора (2 + 1 бесплатно) - 550 руб./месю.',
    '4 оператора (3 + 1 бесплатно) - 800 руб./месю.',
    '5 оператора (4 + 1 бесплатно) - 1000 руб./месю.',
    'Без ограничений - 2000 руб./мес.',
  ]

  const periodOptions = ['3 месяца', '6 месяцев ', '12 месяцев']

  return (
    <div className={styles.operatorPayment}>
      <div className={styles.title}>
        <p>Оплата дополнительных операторов</p>
        <ReactSVG
          onClick={() => dispatch(setOperatorPaymentModal(false))}
          src={close}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.count}>
          <p>Выберите кол-во операторов</p>
          <div className={styles.selectWrapper}>
            <SelectWrapper className={styles.select} variant="red">
              <Select options={countOptions} />
            </SelectWrapper>
            <Explanation text="Выберите общее кол-во операторов для оплаты. Сейчас у вас 1 опер., если вам нужно еще 1, то нужно выбрать 2." />
          </div>
        </div>
        <div className={styles.period}>
          <p>Период оплаты</p>
          <div className={styles.selectWrapper}>
            <SelectWrapper variant="red">
              <Select className={styles.select} options={periodOptions} />
            </SelectWrapper>
          </div>
        </div>
        <div className={styles.amount}>
          <p>Итог к оплате:</p>
          <p className={styles.price}>900 руб.</p>
        </div>
        <div className={styles.description}>
          <p>
            После оплаты вам будет доступно 3 оператора на 3 месяца(до
            18.01.2023).
          </p>
        </div>
      </div>
      <ModalButtons action="Перейти к оплате" />
    </div>
  )
}
