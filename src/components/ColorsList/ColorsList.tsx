import clsx from 'clsx'
import { useState, DetailedHTMLProps, HTMLAttributes } from 'react'
import { Color } from '../Color/Color'
import { WidgetColor } from '../../types/colors'
import styles from './ColorsList.module.scss'

export interface ColorsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  colors: WidgetColor[]
}

export const ColorsList = ({ className }: ColorsProps) => {
  const [selected, setSelected] = useState<WidgetColor>('Green')

  console.log(selected)

  return (
    <div className={clsx(styles.colors, className)}>
      <Color
        onClick={() => setSelected('Green')}
        checked={selected === 'Green'}
        variant={'Green'}
      />
      <Color
        onClick={() => setSelected('LightGreen')}
        checked={selected === 'LightGreen'}
        variant={'LightGreen'}
      />
      <Color
        onClick={() => setSelected('Blue')}
        checked={selected === 'Blue'}
        variant={'Blue'}
      />
      <Color
        onClick={() => setSelected('LightPurple')}
        checked={selected === 'LightPurple'}
        variant={'LightPurple'}
      />
      <Color
        onClick={() => setSelected('Orange')}
        checked={selected === 'Orange'}
        variant={'Orange'}
      />
      <Color
        onClick={() => setSelected('LightRed')}
        checked={selected === 'LightRed'}
        variant={'LightRed'}
      />
      <Color
        onClick={() => setSelected('Gray')}
        checked={selected === 'Gray'}
        variant={'Gray'}
      />
    </div>
  )
}
