import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { instance } from 'redux/contacts/contactsApi';

const token = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await instance.post('/users/signup', credentials);
    token.set(data.token);
    toast.success(`Registration completed`);
    return data;
  } catch (error) {
    return toast.error(`Registration failed - ${error.message}`);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await instance.post('/users/login', credentials);
    token.set(data.token);
    toast.success(`You are log in`);
    return data;
  } catch (error) {
    return toast.error(`Log in failed - ${error.message}`);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await instance.post('/users/logout');
    token.unset();
    toast.info(`You are log out`);
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await instance.get('/users/current');
      return data;
    } catch (error) {
      toast.error(`${error.message}`);
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
