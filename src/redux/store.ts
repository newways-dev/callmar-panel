import { configureStore } from '@reduxjs/toolkit'
import modal from './modals/slice'
import colors from './colors/slice'
import avatar from './avatar/slice'
import widget from './widget/slice'

export const store = configureStore({
  reducer: {
    modal,
    colors,
    avatar,
    widget,
  },
})

export type RootState = ReturnType<typeof store.getState>
