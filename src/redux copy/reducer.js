import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const initialState = {
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

export const contactsReducer = createReducer(initialState, builder => {
  builder.addCase(addContact, (state, action) => {
    state.contacts.push(action.payload);
  });

  builder.addCase(deleteContact, (state, action) => {
    const index = state.contacts.findIndex(
      contact => contact.id === action.payload
    );
    state.contacts.splice(index, 1);
  });
});

const initialFilter = { filter: '' };

export const filterReducer = createReducer(initialFilter, builder => {
  builder.addCase(setFilter, (state, action) => {
    state.filter = action.payload;
  });
});
