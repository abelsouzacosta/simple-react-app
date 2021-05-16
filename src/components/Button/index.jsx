import React from 'react';
import './styles.css';

import P from 'prop-types';

export const Button = ({ text, action, disabled }) => {
  return (
    <button onClick={action} className="button" disabled={disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  action: P.func,
  disabled: P.bool,
};
