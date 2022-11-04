import { useState } from 'react'
import ReactSlider from 'react-slider'

import styles from './Range.module.scss'

export const Range = () => {
  const [min, setMin] = useState<number>(0)
  const [max, setMax] = useState<number>(0)

  return (
    <div className={styles.range}>
      <div className={styles.values}>
        <span>{min}</span>
        <span>{max}</span>
      </div>
      <ReactSlider
        defaultValue={[min, max]}
        className={styles.inputRange}
        trackClassName="tracker"
        min={0}
        max={500}
        minDistance={50}
        step={50}
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
