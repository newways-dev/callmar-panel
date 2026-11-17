import { ReactSVG } from 'react-svg'
import { useState, DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './DragPhone.module.scss'
import clsx from 'clsx'

import drag from '.././../assets/icons/drag.svg'
import { Select } from '../Select/Select'
import { SelectWrapper } from '../SelectWrapper/SelectWrapper'

export interface DragPhoneProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  position?: number
  clientname: string
  clientphone: number
}

export const DragPhone = ({
  clientname,
  clientphone,
  position,
  className,
}: DragPhoneProps) => {
  const { t } = useTranslation()
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')

  return (
    <div className={clsx(styles.dragPhone, className)}>
      <ReactSVG src={drag} />
      <div className={styles.position}>{position}</div>
      <SelectWrapper className={styles.select} variant='gray'>
        <Select className={styles.select} options={[t('Тел.')]} />
      </SelectWrapper>
      <input
        type='text'
        placeholder={
          clientphone === 0 ? t('Номер клиента') : clientphone.toString()
        }
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        placeholder={clientname === '' ? t('Имя клиента') : clientname}
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}
