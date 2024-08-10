// ./redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice';
import userReducer from './api/auth/authSlice'; // Ensure this path is correct
import { apiSlice } from './api/apiSlice'; // Ensure this path is correct

export const store = configureStore({
  reducer: {
    nav: navReducer, // Reducer for navigation
    auth: userReducer, // Reducer for authentication
    [apiSlice.reducerPath]: apiSlice.reducer, // Add API slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Add API middleware
});
