import { RootState } from '../store'

export const selectWidgetColor = (state: RootState) => state.widget.color
export const selectWidgetShape = (state: RootState) => state.widget.shape
