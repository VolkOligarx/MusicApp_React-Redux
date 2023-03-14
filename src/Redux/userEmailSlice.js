import { createSlice } from '@reduxjs/toolkit'

const initialState = {
}

export const userEmail = createSlice({
    name: 'userEmail',
    initialState,
    reducers: {
      setUserEmail: (state, action) => {
        state.email = action.payload
      },
    },
  })

  export const { setUserEmail } = userEmail.actions

  export default userEmail.reducer
  