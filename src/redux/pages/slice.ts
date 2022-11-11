import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PagesSliceState } from './types'
import { Pages } from '../../types/pages'

const initialState: PagesSliceState = {
  page: Pages.Calls,
  widgetSettings: false,
}

const pagesSlice = createSlice({
  name: 'pages',
  initialState: initialState,
  reducers: {
    setPage: (state, action: PayloadAction<Pages>) => {
      state.page = action.payload
    },
    setWidgetSettings: (state, action: PayloadAction<boolean>) => {
      state.widgetSettings = action.payload
    },
  },
})

export const { setPage, setWidgetSettings } = pagesSlice.actions

export default pagesSlice.reducer
