import clsx from 'clsx'
import { useEffect, useState, DetailedHTMLProps, HTMLAttributes } from 'react'
import { ReactSVG } from 'react-svg'
import styles from './MobileHeader.module.scss'

import home from '../../assets/icons/home.svg'
import menu from '../../assets/icons/menu.svg'
import { Sidebar } from '../Sidebar/Sidebar'

export interface MobileHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const MobileHeader = ({ className }: MobileHeaderProps) => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  return (
    <>
      <header className={clsx(styles.mobileHeader, className)}>
        <div className={styles.wrapper}>
          <ReactSVG src={home} />
          <ReactSVG
            onClick={() => setOpen(!open)}
            className={styles.menuIcon}
            src={menu}
          />
        </div>
      </header>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className={styles.mobileSidebarWrapper}
        >
          <Sidebar mobile={true} className={styles.mobileSidebar} />
        </div>
      )}
    </>
  )
}
