import clsx from 'clsx'
import { useState, DetailedHTMLProps, HTMLAttributes } from 'react'
import { Color } from '../Color/Color'
import { ColorsType } from '../../types/colors'
import styles from './ColorsList.module.scss'
import { useDispatch } from 'react-redux'
import { setChatColor } from '../../redux/colors/slice'
import { setWidgetColor } from '../../redux/widget/slice'

export interface ColorsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  colors?: ColorsType[]
  type: 'widget' | 'chat'
}

export const ColorsList = ({ type, className }: ColorsProps) => {
  const [selected, setSelected] = useState<ColorsType>('Green')
  const dispatch = useDispatch()

  const handleClick = (color: ColorsType) => {
    setSelected(color)

    if (type === 'chat') {
      dispatch(setChatColor(color))
    }

    if (type === 'widget') {
      dispatch(setWidgetColor(color))
    }
  }

  return (
    <div className={clsx(styles.colors, className)}>
      <Color
        onClick={() => handleClick('Green')}
        checked={selected === 'Green'}
        variant={'Green'}
      />
      <Color
        onClick={() => handleClick('LightGreen')}
        checked={selected === 'LightGreen'}
        variant={'LightGreen'}
      />
      <Color
        onClick={() => handleClick('Blue')}
        checked={selected === 'Blue'}
        variant={'Blue'}
      />
      <Color
        onClick={() => handleClick('LightPurple')}
        checked={selected === 'LightPurple'}
        variant={'LightPurple'}
      />
      <Color
        onClick={() => handleClick('Orange')}
        checked={selected === 'Orange'}
        variant={'Orange'}
      />
      <Color
        onClick={() => handleClick('LightRed')}
        checked={selected === 'LightRed'}
        variant={'LightRed'}
      />
      {type !== 'widget' && (
        <Color
          onClick={() => handleClick('Gray')}
          checked={selected === 'Gray'}
          variant={'Gray'}
        />
      )}
    </div>
  )
}
