import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const auth = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: {
    [authOperations.registerUser.fulfilled](state, action) {
      state.user = action.payload;
    },
  },
});

export default auth.reducer;
