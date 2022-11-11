import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AvatarSliceState } from './types'

const initialState: AvatarSliceState = {
  avatar: 0,
}

const avatarSlice = createSlice({
  name: 'avatar',
  initialState: initialState,
  reducers: {
    setAvatar: (state, action: PayloadAction<number>) => {
      state.avatar = action.payload
    },
  },
})

export const { setAvatar } = avatarSlice.actions

export default avatarSlice.reducer
