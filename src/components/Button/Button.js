import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export default function Button({ children }) {
  return (
    <div
      className="button"
      styleName="button"
    >
      {children}
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
