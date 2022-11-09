import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ReactSVG } from 'react-svg'
import { Button } from '../Button/Button'
import styles from './Input.module.scss'

import edit from '../../assets/icons/edit.svg'
import { Colors } from '../../types/colors'

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder?: string
  type: 'text' | 'password' | 'email' | 'phone' | 'edit' | 'checkbox' | 'main'
}

export const Input = ({
  placeholder,
  type,
  className,
  ...props
}: InputProps) => {
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
      return (
        <div className={styles.inputWrapper}>
          <p className={styles.placeholder}>{placeholder}</p>
          <input
            type='text'
            className={clsx(styles.input, className)}
            {...props}
          />
        </div>
      )
    case 'email':
      return (
        <div className={styles.inputWrapper}>
          <p className={styles.placeholder}>{placeholder}</p>
          <input
            type='email'
            className={clsx(styles.input, className)}
            {...props}
          />
        </div>
      )
    case 'password':
      return (
        <div className={styles.inputWrapper}>
          <p className={styles.placeholder}>{placeholder}</p>
          <input
            type='password'
            className={clsx(styles.input, className)}
            {...props}
          />
        </div>
      )
    case 'phone':
      return (
        <div className={styles.inputWrapper}>
          <p className={styles.placeholder}>{placeholder}</p>
          <input className={clsx(styles.input, className)} {...props} />
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
            <span>ред.адрес</span>
          </Button>
        </div>
      )
    case 'checkbox':
      return <input type='checkbox' />

    default:
      return <></>
  }
}
