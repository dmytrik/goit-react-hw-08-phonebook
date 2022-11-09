import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactInState } from './contactsSlice';

const getContacts = createAsyncThunk('contacts/getContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    console.log(data);
    return data;
  } catch (error) {}
});

const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, { dispatch }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      dispatch(addContactInState({ contact }));
      return data;
    } catch (error) {}
  }
);

const operations = {
  getContacts,
  addContact,
};

export default operations;
