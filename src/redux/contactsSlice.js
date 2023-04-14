import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [
    { id: 'vvcoW1MajuZM4PNe2ZsHZ', name: 'Fingon', number: '455-12-988' },
    {
      id: 'qSIc9aRTKaESQ-K4RV8gj',
      name: 'Fingolfin Upp',
      number: '455-12-987',
    },
    {
      id: 'eLdtHopN6hOUf29TW-Ich',
      name: 'Maedros Feanoring',
      number: '000-12-56',
    },
    { id: 'bIvczqiMjG-cgs3_Un_MA', name: 'Feanor Flame', number: '013456789' },
    {
      id: 'eq5QLITJ0_-v2VZj0kb3o',
      name: 'Turin Thurambar',
      number: '123-43-21',
    },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            name: contact.name,
            number: contact.number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
