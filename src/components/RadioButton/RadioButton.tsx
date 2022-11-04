import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './RadioButton.module.scss'

export interface RadioButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  checked: boolean
  label: string
}

export const RadioButton = ({
  checked,
  className,
  label,
  ...props
}: RadioButtonProps) => {
  return (
    <div className={clsx(styles.radioButton, className)}>
      <input checked={checked} type="radio" {...props} />
      <span className={clsx(styles.label, { [styles.red]: checked })}>
        {label}
      </span>
    </div>
  )
}
