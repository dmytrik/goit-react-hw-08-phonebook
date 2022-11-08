import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
//{name: 'dmitry', email: 'dmysamo@gmail.com', password: '2698sdvpiv'}

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const registerUser = createAsyncThunk('auth/register', async user => {
  try {
    const { data } = await axios.post('/users/signup', user);
    token.set(data.token);
    return data;
  } catch (error) {}
});
const loginUser = createAsyncThunk('auth/login', async user => {
  try {
    const { data } = await axios.post('/users/login', user);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk('auth/logOut', async user => {
  try {
    const { data } = await axios.post('/users/logout', user);
    token.unset();
    return data;
  } catch (error) {}
});

const operations = {
  registerUser,
  loginUser,
  logOut,
};
export default operations;
