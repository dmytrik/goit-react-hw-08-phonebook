import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getContacts, delContact, addContact } from 'api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await delContact(id);
      dispatch(removeContact({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (contact, { rejectWithValue, dispatch }) => {
    try {
      await addContact(contact);
      dispatch(addContactInState({ contact }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    addContactInState(state, action) {
      state.items.push(action.payload.contact);
    },
    removeContact(state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    },
    setFilter(state, action) {
      state.filter = action.payload.text;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: setError,
    [deleteContact.rejected]: setError,
    [addNewContact.rejected]: setError,
  },
});

export const { setFilter, addContactInState, removeContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
