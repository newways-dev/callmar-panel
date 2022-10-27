import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PagesSliceState } from './types'
import { Pages } from '../../types/pages'

const initialState: PagesSliceState = {
  page: Pages.Calls,
}

const pagesSlice = createSlice({
  name: 'pages',
  initialState: initialState,
  reducers: {
    setPage: (state, action: PayloadAction<Pages>) => {
      state.page = action.payload
    },
  },
})

export const { setPage } = pagesSlice.actions

export default pagesSlice.reducer
