import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contact/add', (name, number) => {
  return {
    payload: {
      id: shortid(),
      name: name,
      number: number,
    },
  };
});

const deleteContact = createAction('contact/delete');

const changeFilter = createAction('contacts/ChangeFilter');

const actions = { addContact, deleteContact, changeFilter };

export default actions;
