import { ColorsType } from '../../types/colors'
import { ActiveWidgetType } from '../../types/widget'
import { getWidgetImage } from './Widget'

const SHAPES: ActiveWidgetType[] = [
  'round',
  'round-home',
  'square',
  'round-square',
]
const COLORS: ColorsType[] = [
  'Green',
  'LightGreen',
  'Blue',
  'LightPurple',
  'Orange',
  'LightRed',
  'Gray',
]

describe('getWidgetImage', () => {
  it('has artwork for every shape and colour', () => {
    for (const shape of SHAPES) {
      for (const color of COLORS) {
        expect(getWidgetImage(shape, color)).toBeTruthy()
      }
    }
  })

  it('falls back to the purple artwork for Gray', () => {
    for (const shape of SHAPES) {
      expect(getWidgetImage(shape, 'Gray')).toBe(
        getWidgetImage(shape, 'LightPurple')
      )
    }
  })

  it('uses different artwork for different colours', () => {
    expect(getWidgetImage('round', 'Blue')).not.toBe(
      getWidgetImage('round', 'Orange')
    )
  })
})
