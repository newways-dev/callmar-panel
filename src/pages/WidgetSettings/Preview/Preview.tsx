import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { FullScreen } from './FullScreen/FullScreen'
import { WidgetLayout } from '../../../types/widget'
import { Standart } from './Standart/Standart'
import { Banner } from './Banner/Banner'
import { Foto } from './Foto/Foto'

import styles from './Preview.module.scss'

export interface PreviewProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  heading: string
  callSeconds: number
  buttonText: string
  showTimer: boolean
  layout: WidgetLayout
}

export const Preview = ({
  layout,
  heading,
  callSeconds,
  buttonText,
  showTimer,
}: PreviewProps) => {
  switch (layout) {
    case 'full-screen':
      return (
        <div className={styles.preview}>
          <FullScreen
            heading={heading}
            callSeconds={callSeconds}
            buttonText={buttonText}
            showTimer={showTimer}
          />
        </div>
      )
    case 'banner':
      return (
        <Banner
          heading={heading}
          callSeconds={callSeconds}
          buttonText={buttonText}
          showTimer={showTimer}
        />
      )
    case 'foto':
      return (
        <div className={styles.preview}>
          <Foto
            heading={heading}
            callSeconds={callSeconds}
            buttonText={buttonText}
            showTimer={showTimer}
          />
        </div>
      )
    case 'standart':
      return (
        <div className={styles.preview}>
          <Standart
            heading={heading}
            callSeconds={callSeconds}
            buttonText={buttonText}
            showTimer={showTimer}
          />
        </div>
      )

    default:
      return <></>
  }
}
