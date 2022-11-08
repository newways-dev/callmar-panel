import { ReactSVG } from 'react-svg'
import { useState, DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './DragPhone.module.scss'
import clsx from 'clsx'

import drag from '.././../assets/icons/drag.svg'
import { Select } from '../Select/Select'

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
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')

  return (
    <div className={clsx(styles.dragPhone, className)}>
      <ReactSVG src={drag} />
      <div className={styles.position}>{position}</div>
      <Select
        className={styles.select}
        options={['Тел.']}
        placeholder='Тел.'
        variant='gray'
      />
      <input
        defaultValue={clientphone}
        type='text'
        placeholder={
          clientphone === 0 ? 'Номер клиента' : clientphone.toString()
        }
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        defaultValue={clientname}
        placeholder={clientname === '' ? 'Имя клиента' : clientname}
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}
