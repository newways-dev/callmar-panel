import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Lable.module.scss'

export interface LabelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  mode: 'off' | 'on'
}

export const Lable = ({ mode, className, ...props }: LabelProps) => {
  const { t } = useTranslation()

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
        {mode === 'on' ? t('Включен') : t('Выключен')}
      </span>
    </div>
  )
}
