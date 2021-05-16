import React from 'react';
import './styles.css';

import P from 'prop-types';

export const Input = ({ searchValue, handleChange }) => {
  return (
    <input type="search" value={searchValue} onChange={handleChange} className="text-input" placeholder="Search..." />
  );
};

Input.propTypes = {
  searchValue: P.string,
  handleChange: P.func,
};
