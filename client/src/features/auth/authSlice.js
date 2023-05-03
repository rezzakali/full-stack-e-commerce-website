import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    Login: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },

    logout: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },

    adminLogout: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});

export const { Login, logout, adminLogout } = authSlice.actions;

export default authSlice.reducer;
