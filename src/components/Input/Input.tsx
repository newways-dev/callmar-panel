import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import { Button } from '../Button/Button'
import styles from './Input.module.scss'

import edit from '../../assets/icons/edit.svg'
import { Colors } from '../../types/colors'

export type InputVariant =
  | 'text'
  | 'password'
  | 'email'
  | 'phone'
  | 'edit'
  | 'checkbox'
  | 'main'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Visual variant of the field; also decides the native input type. */
  type: InputVariant
}

const NATIVE_TYPE = {
  text: 'text',
  email: 'email',
  password: 'password',
  phone: 'tel',
} as const

export const Input = ({ type, placeholder, className, ...props }: InputProps) => {
  const { t } = useTranslation()

  switch (type) {
    case 'main':
      return (
        <input
          placeholder={placeholder}
          className={clsx(styles.main, className)}
          {...props}
        />
      )

    case 'text':
    case 'email':
    case 'password':
    case 'phone':
      return (
        <div className={styles.inputWrapper}>
          <p className={styles.placeholder}>{placeholder}</p>
          <input
            type={NATIVE_TYPE[type]}
            className={clsx(styles.input, className)}
            {...props}
          />
        </div>
      )

    case 'edit':
      return (
        <div className={styles.editInputWrapper}>
          <input
            placeholder={placeholder}
            className={clsx(styles.editInput, className)}
            {...props}
          />
          <Button className={styles.edit} variant={Colors.Red}>
            <ReactSVG src={edit} />
            <span>{t('ред.адрес')}</span>
          </Button>
        </div>
      )

    case 'checkbox':
      return <input type="checkbox" {...props} />

    default:
      return null
  }
}
