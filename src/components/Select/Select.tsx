import clsx from 'clsx'
import { ChangeEvent, SelectHTMLAttributes } from 'react'
import styles from './Select.module.scss'

/** A plain string is used as both the value and the label. */
export type SelectOption = string | { value: string; label: string }

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: SelectOption[]
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({
  onChange,
  value,
  defaultValue,
  options,
  className,
}: SelectProps) => {
  return (
    <select
      onChange={onChange}
      value={value}
      defaultValue={value === undefined ? defaultValue : undefined}
      className={clsx(styles.select, className)}
    >
      {options.map((option) => {
        const { value: optionValue, label } =
          typeof option === 'string'
            ? { value: option, label: option }
            : option

        return (
          <option key={optionValue} value={optionValue}>
            {label}
          </option>
        )
      })}
    </select>
  )
}
