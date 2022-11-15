import { RootState } from '../store'

export const selectPages = (state: RootState) => state.pages.page
export const selectWidgetSettings = (state: RootState) =>
  state.pages.widgetSettings
