import clsx from 'clsx'
import { ReactSVG } from 'react-svg'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Color.module.scss'

import ok from '../../assets/icons/checked.svg'
import { Colors } from '../../types/colors'

export interface ColorProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  checked: boolean
  variant: Colors
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
            [styles.green]: variant === Colors.Green,
            [styles.lightGreen]: variant === Colors.LightGreen,
            [styles.blue]: variant === Colors.Blue,
            [styles.lightPurple]: variant === Colors.LightPurple,
            [styles.orange]: variant === Colors.Orange,
            [styles.lightRed]: variant === Colors.LightRed,
            [styles.gray]: variant === Colors.Gray,
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
            [styles.green]: variant === Colors.Green,
            [styles.lightGreen]: variant === Colors.LightGreen,
            [styles.blue]: variant === Colors.Blue,
            [styles.lightPurple]: variant === Colors.LightPurple,
            [styles.orange]: variant === Colors.Orange,
            [styles.lightRed]: variant === Colors.LightRed,
            [styles.gray]: variant === Colors.Gray,
          })}
        />
      )
    default:
      return <></>
  }
}
