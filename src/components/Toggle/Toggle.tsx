import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ReactSVG } from 'react-svg'
import styles from './Toggle.module.scss'

import circle from '../../assets/icons/circle.svg'

export interface ToggleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  mode: 'off' | 'on'
}

export const Toggle = ({ className, mode, ...props }: ToggleProps) => {
  return (
    <div
      className={clsx(
        styles.toggle,
        className,
        { [styles.toggleOn]: mode === 'on' },
        { [styles.toggleOff]: mode === 'off' }
      )}
      {...props}
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
  )
}
