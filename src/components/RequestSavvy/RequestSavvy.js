import React, { Component } from 'react';
import NavHeader from '../NavHeader';
import Button from '../Button';
import './RequestSavvy.scss';

export default class RequestSavvy extends Component {
  render() {
    return (
      <div styleName="container">
        <NavHeader />
        <div styleName="content">
          <div>What should we write our next Savvy about?</div>
          <input type="text" />
          <Button>Submit</Button>
        </div>
      </div>
    );
  }
}
