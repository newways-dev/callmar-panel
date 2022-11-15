import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { ColorsType } from '../../types/colors'
import { ActiveWidgetType } from '../../types/widget'
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
import { useSelector } from 'react-redux'
import {
  selectWidgetColor,
  selectWidgetShape,
} from '../../redux/widget/selector'

export interface WidgetProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: ColorsType
  shape?: ActiveWidgetType
  showHint?: boolean
}

export const Widget = ({ showHint, className }: WidgetProps) => {
  const [show, setShow] = useState<boolean>(false)

  const shape = useSelector(selectWidgetShape)
  const color = useSelector(selectWidgetColor)

  switch (shape) {
    case 'round':
      return (
        <div
          onMouseOver={() => showHint && setShow(true)}
          onMouseLeave={() => showHint && setShow(false)}
          className={clsx(styles.widget, className)}
        >
          {show && (
            <div className={styles.message}>
              <p>Есть вопросы? Нажмите и мы перезвоним вам за 27 секунд!</p>
            </div>
          )}
          <img
            src={
              color === 'LightRed'
                ? round_red
                : color === 'Blue'
                ? round_blue
                : color === 'Orange'
                ? round_orange
                : color === 'Green'
                ? round_green
                : color === 'LightGreen'
                ? round_light_green
                : round_purple
            }
            alt=''
          />
        </div>
      )
    case 'round-home':
      return (
        <div
          onMouseOver={() => showHint && setShow(true)}
          onMouseLeave={() => showHint && setShow(false)}
          className={clsx(styles.widget, className)}
        >
          {show && (
            <div className={styles.message}>
              <p>Есть вопросы? Нажмите и мы перезвоним вам за 27 секунд!</p>
            </div>
          )}
          <img
            src={
              color === 'LightRed'
                ? round_home_red
                : color === 'Blue'
                ? round_home_blue
                : color === 'Orange'
                ? round_home_orange
                : color === 'Green'
                ? round_home_green
                : color === 'LightGreen'
                ? round_home_light_green
                : round_home_purple
            }
            alt=''
          />
        </div>
      )
    case 'round-square':
      return (
        <div
          onMouseOver={() => showHint && setShow(true)}
          onMouseLeave={() => showHint && setShow(false)}
          className={clsx(styles.widget, className)}
        >
          {show && (
            <div className={styles.message}>
              <p>Есть вопросы? Нажмите и мы перезвоним вам за 27 секунд!</p>
            </div>
          )}
          <img
            src={
              color === 'LightRed'
                ? round_square_red
                : color === 'Blue'
                ? round_square_blue
                : color === 'Orange'
                ? round_square_orange
                : color === 'Green'
                ? round_square_green
                : color === 'LightGreen'
                ? round_square_light_green
                : round_square_purple
            }
            alt=''
          />
        </div>
      )
    case 'square':
      return (
        <div
          onMouseOver={() => showHint && setShow(true)}
          onMouseLeave={() => showHint && setShow(false)}
          className={clsx(styles.widget, className)}
        >
          {show && (
            <div className={styles.message}>
              <p>Есть вопросы? Нажмите и мы перезвоним вам за 27 секунд!</p>
            </div>
          )}
          <img
            src={
              color === 'LightRed'
                ? square_red
                : color === 'Blue'
                ? square_blue
                : color === 'Orange'
                ? square_orange
                : color === 'Green'
                ? square_green
                : color === 'LightGreen'
                ? square_light_green
                : square_purple
            }
            alt=''
          />
        </div>
      )

    default:
      return <></>
  }
}
