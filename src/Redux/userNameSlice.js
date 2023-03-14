import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  }

  export const userName = createSlice({
    name: 'userName',
    initialState,
    reducers: {
      setUserName: (state, action) => {
        state.login = action.payload
      },
    },
  })

  export const { setUserName } = userName.actions

export default userName.reducer