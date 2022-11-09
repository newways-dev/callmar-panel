import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalSliceState } from './types'

const initialState: ModalSliceState = {
  modal: {
    newWidget: false,
  },
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    setNewWidgetModal: (state, action: PayloadAction<boolean>) => {
      state.modal.newWidget = action.payload
    },
  },
})

export const { setNewWidgetModal } = modalSlice.actions

export default modalSlice.reducer
