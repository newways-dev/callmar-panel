import { RootState } from '../store'

export const selectChatColor = (state: RootState) => state.colors.colors.chat
