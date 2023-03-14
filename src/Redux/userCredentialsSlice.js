import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: "",
    email: "",
    accessToken: "",
}

export const userCredentialsSlice = createSlice({
    name: 'credentials',
    initialState,
    reducers: {
        setUserCredentials: (state, action) => {
            return action.payload
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        }
    }
})

export const {
    setAccessToken,
    setUserCredentials
} = userCredentialsSlice.actions

export default userCredentialsSlice.reducer