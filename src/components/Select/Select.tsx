import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Select.module.scss'

export interface SelectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  placeholder: string
  options: string[]
  variant: 'purple' | 'gray'
  onChange?: () => void
}

export const Select = ({
  variant,
  onChange,
  options,
  placeholder,
  className,
  ...props
}: SelectProps) => {
  switch (variant) {
    case 'purple':
      return (
        <div {...props} className={clsx(styles.select, className)}>
          <select onChange={onChange}>
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
        <div {...props} className={clsx(styles.selectGray, className)}>
          <select onChange={onChange}>
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
