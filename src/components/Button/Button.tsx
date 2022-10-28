import clsx from 'clsx'
import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'
import { ReactSVG } from 'react-svg'
import { Buttons } from '../../types/buttons'
import { Colors } from '../../types/colors'
import styles from './Button.module.scss'

import add from '../../assets/icons/add.svg'
import remove from '../../assets/icons/remove.svg'

export interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode
  variant?: Colors
  type?: Buttons
}

export const Button = ({
  variant,
  type,
  className,
  children,
  ...props
}: ButtonProps) => {
  switch (type) {
    case Buttons.Add:
      return (
        <button className={clsx(styles.add, className)} {...props}>
          <ReactSVG src={add} />
          {children}
        </button>
      )

    case Buttons.Delete:
      return (
        <button className={clsx(styles.delete, className)} {...props}>
          <ReactSVG src={remove} />
          Удалить
        </button>
      )

    default:
      return (
        <button
          className={clsx(
            styles.button,
            { [styles.red]: variant === Colors.Red },
            { [styles.purple]: variant === Colors.Purple },
            className
          )}
          {...props}
        >
          {children}
        </button>
      )
  }
}
