import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './NumInput.module.scss'

export interface NumInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  defaultValue: number
}

export const NumInput = ({ className, defaultValue }: NumInputProps) => {
  return (
    <input
      type="number"
      defaultValue={defaultValue}
      className={clsx(styles.numInput, className)}
    />
  )
}
