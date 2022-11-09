import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ColorsType } from '../../types/colors'
import { ColorsSliceState } from './types'

const initialState: ColorsSliceState = {
  colors: {
    chat: 'Green',
  },
}

const colorsSlice = createSlice({
  name: 'colors',
  initialState: initialState,
  reducers: {
    setChatColor: (state, action: PayloadAction<ColorsType>) => {
      state.colors.chat = action.payload
    },
  },
})

export const { setChatColor } = colorsSlice.actions

export default colorsSlice.reducer
