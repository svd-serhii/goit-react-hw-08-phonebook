import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, { payload }) => state)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => state);

    builder
      .addCase(addContact.pending, (state, { payload }) => state)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        if (state.items.find(({ name }) => name === payload.name)) {
          return toast.error(`${payload.name} is already in contacts.`);
        }
        if (state.items.find(({ number }) => number === payload.number)) {
          return toast.error(
            `${payload.number} is already belong to ${state.name}.`
          );
        }
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(addContact.rejected, (state, action) => {
        return state;
      });

    builder
      .addCase(deleteContact.pending, (state, { payload }) => state)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === payload?.id
        );
        state.items.splice(index, 1);
        toast.info('Contact deleted');
      })
      .addCase(deleteContact.rejected, (state, action) => {
        return state;
      });
  },
});
