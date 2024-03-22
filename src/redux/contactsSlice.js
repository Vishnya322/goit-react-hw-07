import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact(state, action) {
      const { id, name, number } = action.payload;
      state.items.push({ id, name, number });
    },
    deleteContact(state, action) {
      const idToDelete = action.payload;
      state.items = state.items.filter(contact => contact.id !== idToDelete);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
