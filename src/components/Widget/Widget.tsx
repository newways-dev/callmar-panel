import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { ColorsType } from '../../types/colors'
import { ActiveWidgetType } from '../../types/widget'
import {
  selectWidgetColor,
  selectWidgetShape,
} from '../../redux/widget/selector'
import styles from './Widget.module.scss'

import round_red from '../../assets/images/widget/circle/red.png'
import round_blue from '../../assets/images/widget/circle/blue.png'
import round_green from '../../assets/images/widget/circle/green.png'
import round_light_green from '../../assets/images/widget/circle/light-green.png'
import round_orange from '../../assets/images/widget/circle/orange.png'
import round_purple from '../../assets/images/widget/circle/purple.png'

import round_home_red from '../../assets/images/widget/circle-home/red.png'
import round_home_blue from '../../assets/images/widget/circle-home/blue.png'
import round_home_green from '../../assets/images/widget/circle-home/green.png'
import round_home_light_green from '../../assets/images/widget/circle-home/light-green.png'
import round_home_orange from '../../assets/images/widget/circle-home/orange.png'
import round_home_purple from '../../assets/images/widget/circle-home/purple.png'

import round_square_red from '../../assets/images/widget/round/red.png'
import round_square_blue from '../../assets/images/widget/round/blue.png'
import round_square_green from '../../assets/images/widget/round/green.png'
import round_square_light_green from '../../assets/images/widget/round/light-green.png'
import round_square_orange from '../../assets/images/widget/round/orange.png'
import round_square_purple from '../../assets/images/widget/round/purple.png'

import square_red from '../../assets/images/widget/square/red.png'
import square_blue from '../../assets/images/widget/square/blue.png'
import square_green from '../../assets/images/widget/square/green.png'
import square_light_green from '../../assets/images/widget/square/light-green.png'
import square_orange from '../../assets/images/widget/square/orange.png'
import square_purple from '../../assets/images/widget/square/purple.png'

type ImagesByColor = Record<ColorsType, string>

/**
 * Widget artwork for every shape and colour.
 * Colours without their own artwork (LightPurple, Gray) use the purple one.
 */
export const widgetImages: Record<ActiveWidgetType, ImagesByColor> = {
  round: {
    LightRed: round_red,
    Blue: round_blue,
    Orange: round_orange,
    Green: round_green,
    LightGreen: round_light_green,
    LightPurple: round_purple,
    Gray: round_purple,
  },
  'round-home': {
    LightRed: round_home_red,
    Blue: round_home_blue,
    Orange: round_home_orange,
    Green: round_home_green,
    LightGreen: round_home_light_green,
    LightPurple: round_home_purple,
    Gray: round_home_purple,
  },
  'round-square': {
    LightRed: round_square_red,
    Blue: round_square_blue,
    Orange: round_square_orange,
    Green: round_square_green,
    LightGreen: round_square_light_green,
    LightPurple: round_square_purple,
    Gray: round_square_purple,
  },
  square: {
    LightRed: square_red,
    Blue: square_blue,
    Orange: square_orange,
    Green: square_green,
    LightGreen: square_light_green,
    LightPurple: square_purple,
    Gray: square_purple,
  },
}

export const getWidgetImage = (shape: ActiveWidgetType, color: ColorsType) =>
  widgetImages[shape]?.[color]

export interface WidgetProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: ColorsType
  shape?: ActiveWidgetType
  showHint?: boolean
}

export const Widget = ({ showHint, className }: WidgetProps) => {
  const { t } = useTranslation()
  const [show, setShow] = useState<boolean>(false)

  const shape = useSelector(selectWidgetShape)
  const color = useSelector(selectWidgetColor)

  const image = getWidgetImage(shape, color)

  if (!image) return null

  return (
    <div
      onMouseOver={() => showHint && setShow(true)}
      onMouseLeave={() => showHint && setShow(false)}
      className={clsx(styles.widget, className)}
    >
      {show && (
        <div className={styles.message}>
          <p>{t('Есть вопросы? Нажмите и мы перезвоним вам за 27 секунд!')}</p>
        </div>
      )}
      <img src={image} alt={t('Виджет обратного звонка')} />
    </div>
  )
}
