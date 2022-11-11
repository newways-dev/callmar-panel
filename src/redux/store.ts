import { configureStore } from '@reduxjs/toolkit'
import pages from './pages/slice'
import modal from './modals/slice'
import colors from './colors/slice'
import avatar from './avatar/slice'

export const store = configureStore({
  reducer: {
    pages,
    modal,
    colors,
    avatar,
  },
})

export type RootState = ReturnType<typeof store.getState>
