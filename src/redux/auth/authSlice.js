import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.pending, (state, action) => state)
      .addCase(authOperations.register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.register.rejected, (state, action) => state);
    builder
      .addCase(authOperations.logIn.pending, (state, action) => state)
      .addCase(authOperations.logIn.rejected, (state, action) => {
        return state;
      })
      .addCase(authOperations.logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      });
    builder
      .addCase(authOperations.logOut.pending, (state, action) => state)
      .addCase(authOperations.logOut.rejected, (state, action) => state)
      .addCase(authOperations.logOut.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
    builder
      .addCase(
        authOperations.fetchCurrentUser.pending,
        (state, action) => state
      )
      .addCase(authOperations.fetchCurrentUser.rejected, (state, action) => {
        return state;
      })
      .addCase(
        authOperations.fetchCurrentUser.fulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.isLoggedIn = true;
        }
      );
  },
});

export default authSlice.reducer;
