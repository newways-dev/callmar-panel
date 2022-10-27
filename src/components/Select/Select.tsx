import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Select.module.scss'

export interface SelectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  placeholder: string
}

export const Select = ({ placeholder, className }: SelectProps) => {
  return (
    <div className={clsx(styles.select, className)}>
      <select>
        <option selected disabled>
          {placeholder}
        </option>
        <option>one</option>
        <option>two</option>
        <option>three</option>
      </select>
    </div>
  )
}
