import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import actions from 'redux/actions';

import PropTypes from 'prop-types';
import './Filter.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(actions.changeFilter(e.currentTarget.value));
  return (
    <label className="Filter__label">
      Find contacts by name
      <input
        className="Filter__input"
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
