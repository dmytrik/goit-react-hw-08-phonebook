import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
//{name: 'dmitry', email: 'dmysamo@gmail.com', password: '2698sdvpiv'}
const registerUser = createAsyncThunk('auth/register', async user => {
  try {
    const { data } = await axios.post('/users/signup', user);
    return data;
  } catch (error) {
    return error;
  }
});
const loginUser = createAsyncThunk('auth/login', async user => {
  try {
    const { data } = await axios.post('/users/login', user);
    return data;
  } catch (error) {
    return error;
  }
});

const operations = {
  registerUser,
  loginUser,
};
export default operations;
