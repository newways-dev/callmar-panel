import { RootState } from '../store'

export const selectNewWidgetModal = (state: RootState) =>
  state.modal.modal.newWidget

export const selectAvatarModal = (state: RootState) => state.modal.modal.avatar
