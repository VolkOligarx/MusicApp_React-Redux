import { createSlice } from '@reduxjs/toolkit'

const initialState = {
}

export const userPassword = createSlice({
    name: 'userPassword',
    initialState,
    reducers: {
      setUserPassword: (state, action) => {
        state.password = action.payload
      },
    },
  })

  export const { setUserPassword } = userPassword.actions

  export default userPassword.reducer