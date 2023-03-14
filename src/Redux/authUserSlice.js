import { createSlice } from '@reduxjs/toolkit'

const initialState = {
}

export const authUser = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setAuthUserToken: (state, action) => {
      state.token = action.payload
    },
  },
})
 
export const { setAuthUserToken } = authUser.actions

export default authUser.reducer