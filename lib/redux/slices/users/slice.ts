import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: UsersSliceState = {
  shownEmailIds: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    toggleEmailId: (state, action: PayloadAction<number>) => {
      const idIndex = state.shownEmailIds.indexOf(action.payload)
      if (idIndex >= 0) {
        // If ID is already in the array, remove it
        state.shownEmailIds.splice(idIndex, 1)
      } else {
        // If ID is not in the array, add it
        state.shownEmailIds.push(action.payload)
      }
    },
  },
})

export interface UsersSliceState {
  shownEmailIds: number[]
}
