import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tracks: [],
}

export const trackList = createSlice({
  name: 'trackList',
  initialState,
  reducers: {
    setTrackList: (state, action) => {
      state.tracks = action.payload
    },
  },
})
 
export const { setTrackList } = trackList.actions

export default trackList.reducer