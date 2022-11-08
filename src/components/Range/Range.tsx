import { useState } from 'react'
import ReactSlider from 'react-slider'

import styles from './Range.module.scss'

export const Range = () => {
  const [min, setMin] = useState<number>(7)
  const [max, setMax] = useState<number>(21)

  return (
    <div className={styles.range}>
      <div className={styles.values}>
        <span>{min}: 15</span>
        <span>{max}: 15</span>
      </div>
      <ReactSlider
        defaultValue={[min, max]}
        className={styles.inputRange}
        trackClassName='tracker'
        min={7}
        max={21}
        step={1}
        withTracks={true}
        pearling={true}
        renderThumb={(props) => {
          return <div {...props} className={styles.thumb}></div>
        }}
        renderTrack={(props) => {
          return <div {...props} className={styles.track}></div>
        }}
        onChange={([min, max]) => {
          setMin(min)
          setMax(max)
        }}
      />
    </div>
  )
}
