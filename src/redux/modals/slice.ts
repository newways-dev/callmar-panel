import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalSliceState } from './types'

const initialState: ModalSliceState = {
  modal: {
    newWidget: false,
    avatar: false,
    operatorData: false,
    operatorPayment: false,
  },
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    setNewWidgetModal: (state, action: PayloadAction<boolean>) => {
      state.modal.newWidget = action.payload
    },
    setAvatarModal: (state, action: PayloadAction<boolean>) => {
      state.modal.avatar = action.payload
    },
    setOperatorDataModal: (state, action: PayloadAction<boolean>) => {
      state.modal.operatorData = action.payload
    },
    setOperatorPaymentModal: (state, action: PayloadAction<boolean>) => {
      state.modal.operatorPayment = action.payload
    },
  },
})

export const {
  setNewWidgetModal,
  setAvatarModal,
  setOperatorDataModal,
  setOperatorPaymentModal,
} = modalSlice.actions

export default modalSlice.reducer
