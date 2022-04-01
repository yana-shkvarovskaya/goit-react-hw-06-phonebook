import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/actions';
import { getContacts } from 'redux/selectors';

import './Form.css';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleNameChange = ({ currentTarget: { value } }) => {
    setName(value);
  };

  const handleNumberChange = ({ currentTarget: { value } }) => {
    setNumber(value);
  };

  const handleSubmit = (name, number) =>
    dispatch(actions.addContact(name, number));

  const handleAddContact = e => {
    e.preventDefault();
    const isRepeatContact = contacts.find(contact => contact.name === name);
    if (isRepeatContact) {
      alert(`${name} is already in contacts.`);
      resetState();
      return;
    }
    handleSubmit(name, number);
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="Contacts" onSubmit={handleAddContact}>
      <label className="Contacts__label">
        Name
        <input
          className="Contacts__input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="Contacts__label">
        Number
        <input
          className="Contacts__input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className="Contact__btn" type="submit">
        Add the contact
      </button>
    </form>
  );
}
