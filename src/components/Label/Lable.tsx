import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Lable.module.scss'

export interface LabelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  mode: 'off' | 'on'
}

export const Lable = ({ mode, className, ...props }: LabelProps) => {
  return (
    <div className={styles.labelWrapper} {...props}>
      <span
        className={clsx(
          styles.title,
          className,
          { [styles.on]: mode === 'on' },
          { [styles.off]: mode === 'off' }
        )}
      >
        {mode === 'on' ? 'Включен' : 'Выключен'}
      </span>
    </div>
  )
}
