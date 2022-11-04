import clsx from 'clsx'
import { useState, DetailedHTMLProps, HTMLAttributes } from 'react'
import { Color } from '../Color/Color'
import { Colors } from '../../types/colors'
import styles from './ColorsList.module.scss'

export interface ColorsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  colors: Colors[]
}

export const ColorsList = ({ className }: ColorsProps) => {
  const [selected, setSelected] = useState(Colors.Green)

  console.log(selected)

  return (
    <div className={clsx(styles.colors, className)}>
      <Color
        onClick={() => setSelected(Colors.Green)}
        checked={selected === Colors.Green}
        variant={Colors.Green}
      />
      <Color
        onClick={() => setSelected(Colors.LightGreen)}
        checked={selected === Colors.LightGreen}
        variant={Colors.LightGreen}
      />
      <Color
        onClick={() => setSelected(Colors.Blue)}
        checked={selected === Colors.Blue}
        variant={Colors.Blue}
      />
      <Color
        onClick={() => setSelected(Colors.LightPurple)}
        checked={selected === Colors.LightPurple}
        variant={Colors.LightPurple}
      />
      <Color
        onClick={() => setSelected(Colors.Orange)}
        checked={selected === Colors.Orange}
        variant={Colors.Orange}
      />
      <Color
        onClick={() => setSelected(Colors.LightRed)}
        checked={selected === Colors.LightRed}
        variant={Colors.LightRed}
      />
      <Color
        onClick={() => setSelected(Colors.Gray)}
        checked={selected === Colors.Gray}
        variant={Colors.Gray}
      />
    </div>
  )
}
