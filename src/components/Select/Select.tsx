import clsx from 'clsx'
import { ChangeEvent, DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Select.module.scss'

export interface SelectProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: string[]
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({
  onChange,
  defaultValue,
  options,
  placeholder,
  className,
}: SelectProps) => {
  return (
    <select
      onChange={onChange}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={clsx(styles.select, className)}
    >
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  )
}
