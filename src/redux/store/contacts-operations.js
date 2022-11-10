import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactInState, removeContact } from './contactsSlice';

const getContacts = createAsyncThunk('contacts/getContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
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

const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { dispatch }) => {
    try {
      const data = await axios.delete(`/contacts/${id}`);
      dispatch(removeContact({ id }));
      return data;
    } catch (error) {}
  }
);

const operations = {
  getContacts,
  addContact,
  deleteContact,
};

export default operations;
