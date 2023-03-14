import { configureStore } from '@reduxjs/toolkit'
import authUserSlice from './authUserSlice'
import trackListSlice from './trackListSlice'
import userCredentialsSlice from './userCredentialsSlice'
import userEmailSlice from './userEmailSlice'
import userNameSlice from './userNameSlice'
import userPasswordSlice from './userPasswordSlice'

export const store = configureStore({
  reducer: {
    authUser: authUserSlice,
    userName: userNameSlice,
    userEmail: userEmailSlice,
    userPassword: userPasswordSlice,
    trackList: trackListSlice,
    userCredentials: userCredentialsSlice,
  },
})
