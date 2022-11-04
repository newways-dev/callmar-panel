import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Select.module.scss'

export interface SelectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  placeholder: string
  options: string[]
  variant: 'purple' | 'gray'
}

export const Select = ({
  variant,
  options,
  placeholder,
  className,
}: SelectProps) => {
  switch (variant) {
    case 'purple':
      return (
        <div className={clsx(styles.select, className)}>
          <select>
            <option selected disabled>
              {placeholder}
            </option>
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        </div>
      )
    case 'gray':
      return (
        <div className={clsx(styles.selectGray, className)}>
          <select>
            <option selected disabled>
              {placeholder}
            </option>
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        </div>
      )

    default:
      return <></>
  }
}
