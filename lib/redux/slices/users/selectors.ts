import type { ReduxState } from '@/lib/redux'

export const selectShownEmailIds = (state: ReduxState) =>
  state.users.shownEmailIds
