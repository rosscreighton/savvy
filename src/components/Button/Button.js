import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export default class Button extends Component {
  render() {
    return (
      <div
        className="button"
        styleName="button"
      >
        {this.props.children}
      </div>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
