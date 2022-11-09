import clsx from 'clsx'
import { ReactSVG } from 'react-svg'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Color.module.scss'

import ok from '../../assets/icons/checked.svg'
import { ColorsType } from '../../types/colors'

export interface ColorProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  checked: boolean
  variant: ColorsType
}

export const Color = ({
  variant,
  checked,
  className,
  ...props
}: ColorProps) => {
  switch (checked) {
    case true:
      return (
        <div
          className={clsx(styles.color, className, {
            [styles.green]: variant === 'Green',
            [styles.lightGreen]: variant === 'LightGreen',
            [styles.blue]: variant === 'Blue',
            [styles.lightPurple]: variant === 'LightPurple',
            [styles.orange]: variant === 'Orange',
            [styles.lightRed]: variant === 'LightRed',
            [styles.gray]: variant === 'Gray',
          })}
          {...props}
        >
          <ReactSVG src={ok} />
        </div>
      )
    case false:
      return (
        <div
          className={clsx(styles.color, className, {
            [styles.green]: variant === 'Green',
            [styles.lightGreen]: variant === 'LightGreen',
            [styles.blue]: variant === 'Blue',
            [styles.lightPurple]: variant === 'LightPurple',
            [styles.orange]: variant === 'Orange',
            [styles.lightRed]: variant === 'LightRed',
            [styles.gray]: variant === 'Gray',
          })}
          {...props}
        />
      )
    default:
      return <></>
  }
}
