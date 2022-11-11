import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { RadioButton } from '../RadioButton/RadioButton'
import styles from './Avatar.module.scss'

export interface AvatarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  img: string
  index: number
  active: number
  onClick: () => void
}

export const Avatar = ({
  img,
  index,
  active,
  className,
  onClick,
}: AvatarProps) => {
  return (
    <div onClick={onClick} className={clsx(styles.avatar, className)}>
      <img src={img} alt='' />
      <RadioButton checked={index === active} />
    </div>
  )
}
