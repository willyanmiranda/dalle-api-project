import { createSlice } from '@reduxjs/toolkit'

export const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    value: null,
    isLoading: false,
  },
  reducers: {
    setPhotos: (state, action) => {
      state.value = action.payload
    },

    setLoader: (state) => {
      state.isLoading = !state.isLoading
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPhotos, setLoader } = photoSlice.actions

export default photoSlice.reducer