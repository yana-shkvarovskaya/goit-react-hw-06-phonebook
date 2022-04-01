import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/actions';
import { getVisibleContacts } from 'redux/selectors';
import PropTypes from 'prop-types';
import './ContactList.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => (
        <li className="ContactList__item" key={id}>
          <p>
            {name}: <span>{number}</span>
          </p>
          <button
            className="ContactList__btn"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
