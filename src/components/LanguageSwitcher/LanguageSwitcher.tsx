import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { Language, LANGUAGES } from '../../i18n'
import styles from './LanguageSwitcher.module.scss'

export interface LanguageSwitcherProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /** Pins the switcher to the top right corner (for pages without the app layout). */
  floating?: boolean
  /** Light variant for dark backgrounds. */
  inverted?: boolean
}

export const LanguageSwitcher = ({
  floating,
  inverted,
  className,
}: LanguageSwitcherProps) => {
  const { i18n } = useTranslation()

  return (
    <div
      className={clsx(
        styles.switcher,
        { [styles.floating]: floating, [styles.inverted]: inverted },
        className
      )}
      role="group"
      aria-label="Language"
    >
      {LANGUAGES.map((language: Language) => (
        <button
          key={language}
          type="button"
          aria-pressed={i18n.language === language}
          className={clsx(styles.option, {
            [styles.active]: i18n.language === language,
          })}
          onClick={() => i18n.changeLanguage(language)}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
