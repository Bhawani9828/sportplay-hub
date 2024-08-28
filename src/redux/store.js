// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './locationSlice'; 

const store = configureStore({
  reducer: {
    location: locationReducer, // Use the new slice
    // Add more reducers here if needed
  },
});

export default store;
