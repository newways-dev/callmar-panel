import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ColorsType } from '../../types/colors'
import { ActiveWidgetType } from '../../types/widget'
import { WidgetSliceState } from './types'

const initialState: WidgetSliceState = {
  color: 'LightRed',
  shape: 'round',
}

const colorsSlice = createSlice({
  name: 'widget',
  initialState: initialState,
  reducers: {
    setWidgetColor: (state, action: PayloadAction<ColorsType>) => {
      state.color = action.payload
    },
    setWidgetShape: (state, action: PayloadAction<ActiveWidgetType>) => {
      state.shape = action.payload
    },
  },
})

export const { setWidgetColor, setWidgetShape } = colorsSlice.actions

export default colorsSlice.reducer
