import { RootState } from '../store'

export const selectAvatarModal = (state: RootState) => state.modal.modal.avatar

export const selectNewWidgetModal = (state: RootState) =>
  state.modal.modal.newWidget

export const selectOperatorDataModal = (state: RootState) =>
  state.modal.modal.operatorData

export const selectOperatorPaymentModal = (state: RootState) =>
  state.modal.modal.operatorPayment
