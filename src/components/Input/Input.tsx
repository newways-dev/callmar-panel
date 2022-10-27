import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Input.module.scss'

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string
  type: 'text' | 'password' | 'email' | 'phone'
}

export const Input = ({
  placeholder,
  type,
  className,
  ...props
}: InputProps) => {
  switch (type) {
    case 'text':
      return (
        <div className={styles.inputWrapper}>
          <p className={styles.placeholder}>{placeholder}</p>
          <input
            type="text"
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
            type="email"
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
            type="password"
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

    default:
      return <></>
  }
}
