import { configureStore } from '@reduxjs/toolkit'
import pages from './pages/slice'

export const store = configureStore({
  reducer: {
    pages,
  },
})

export type RootState = ReturnType<typeof store.getState>
