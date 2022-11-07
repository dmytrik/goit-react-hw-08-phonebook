import { createSlice } from '@reduxjs/toolkit';

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
});

export const { setFilter, addContactInState, removeContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
