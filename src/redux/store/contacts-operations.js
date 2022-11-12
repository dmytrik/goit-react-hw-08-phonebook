import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactInState, removeContact, editContact } from './contactsSlice';

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
      await axios.delete(`/contacts/${id}`);
      dispatch(removeContact({ id }));
    } catch (error) {}
  }
);

const changeContact = createAsyncThunk(
  'contacts/change',
  async (changedContact, { dispatch }) => {
    const { id, name, number } = changedContact;
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      dispatch(editContact({ contact: response.data }));
    } catch (error) {}
  }
);

const operations = {
  getContacts,
  addContact,
  deleteContact,
  changeContact,
};

export default operations;
