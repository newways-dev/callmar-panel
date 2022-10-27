import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Toggle.module.scss'

import circle from '../../assets/icons/circle.svg'
import { ReactSVG } from 'react-svg'

export interface ToggleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  mode: 'off' | 'on'
}

export const Toggle = ({ mode, className, ...props }: ToggleProps) => {
  return (
    <div className={styles.toggleWrapper} {...props}>
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
      <div
        className={clsx(
          styles.toggle,
          { [styles.toggleOn]: mode === 'on' },
          { [styles.toggleOff]: mode === 'off' }
        )}
      >
        {mode === 'on' && (
          <>
            <span className={styles.mode}>ON</span>
            <ReactSVG src={circle} />
          </>
        )}
        {mode === 'off' && (
          <>
            <ReactSVG src={circle} />
            <span className={styles.mode}>OFF</span>
          </>
        )}
      </div>
    </div>
  )
}
