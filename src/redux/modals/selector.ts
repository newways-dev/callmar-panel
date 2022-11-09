import { RootState } from '../store'

export const selectNewWidgetModal = (state: RootState) =>
  state.modal.modal.newWidget
