// redux/locationSlice.js


import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    selectedCity: '',
    selectedArea: '',

  },
  reducers: {
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    setSelectedArea: (state, action) => {
      state.selectedArea = action.payload;
    },
    
  },
});

export const { setSelectedCity, setSelectedArea } = locationSlice.actions;
export default locationSlice.reducer;
