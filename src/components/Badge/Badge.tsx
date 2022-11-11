import clsx from 'clsx'
import { ReactSVG } from 'react-svg'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { BadgeType } from '../../types/badge'
import styles from './Badge.module.scss'

import ok from '../../assets/icons/ok.svg'
import search from '../../assets/icons/search.svg'
import puzzle from '../../assets/icons/puzzle.svg'
import alert from '../../assets/icons/alert.svg'
import copy from '../../assets/icons/copy.svg'
import settings from '../../assets/icons/settings.svg'
import { useDispatch } from 'react-redux'
import { setWidgetSettings } from '../../redux/pages/slice'

export interface BadgeProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: BadgeType
}

export const Badge = ({ variant, className }: BadgeProps) => {
  const dispatch = useDispatch()

  switch (variant) {
    case BadgeType.Success:
      return (
        <div className={clsx(styles.badge, styles.success, className)}>
          <ReactSVG src={ok} />
          <span className={styles.title}>Код установлен</span>
        </div>
      )

    case BadgeType.Search:
      return (
        <div className={clsx(styles.badge, styles.search, className)}>
          <ReactSVG src={search} />
          <span className={styles.title}>Проверить код на сайте</span>
        </div>
      )
    case BadgeType.Instruction:
      return (
        <div className={clsx(styles.badge, styles.instruction, className)}>
          <ReactSVG src={puzzle} />
          <span className={styles.title}>Инструкция по установке</span>
        </div>
      )
    case BadgeType.Alert:
      return (
        <div className={clsx(styles.badge, styles.alert, className)}>
          <ReactSVG src={alert} />
          <span className={styles.title}>Код не установлен</span>
        </div>
      )
    case BadgeType.Code:
      return (
        <div className={clsx(styles.badge, styles.code, className)}>
          <ReactSVG src={puzzle} />
          <span className={styles.title}>Код виджета</span>
        </div>
      )
    case BadgeType.Copy:
      return (
        <div className={clsx(styles.badge, styles.copy, className)}>
          <ReactSVG src={copy} />
          <span className={styles.title}>Копировать</span>
        </div>
      )
    case BadgeType.Settings:
      return (
        <div
          onClick={() => dispatch(setWidgetSettings(true))}
          className={clsx(styles.badge, styles.settings, className)}
        >
          <ReactSVG src={settings} />
          <span className={styles.title}>Настройки виджета</span>
        </div>
      )
    default:
      return <></>
  }
}
