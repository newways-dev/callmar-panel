import { configureStore } from '@reduxjs/toolkit'
import pages from './pages/slice'
import modal from './modals/slice'
import colors from './colors/slice'

export const store = configureStore({
  reducer: {
    pages,
    modal,
    colors,
  },
})

export type RootState = ReturnType<typeof store.getState>
