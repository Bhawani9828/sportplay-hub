// redux/locationSlice.js

import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    selectedCity: '',
    selectedArea: '',
    selectedGame: '', // Add this line
  },
  reducers: {
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    setSelectedArea: (state, action) => {
      state.selectedArea = action.payload;
    },
    setSelectedGame: (state, action) => { // Add this reducer
      state.selectedGame = action.payload;
    },
  },
});

export const { setSelectedCity, setSelectedArea, setSelectedGame } = locationSlice.actions;
export default locationSlice.reducer;