import { createSlice } from '@reduxjs/toolkit'

export const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    value: [],
  },
  reducers: {
    setPhotos: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPhotos } = photoSlice.actions

export default photoSlice.reducer