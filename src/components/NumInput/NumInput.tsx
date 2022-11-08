import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './NumInput.module.scss'

export interface NumInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const NumInput = ({ className }: NumInputProps) => {
  return <input type='number' className={clsx(styles.numInput, className)} />
}
