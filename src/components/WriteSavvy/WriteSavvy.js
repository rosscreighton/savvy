import React, { Component } from 'react';
import NavHeader from '../NavHeader';
import Button from '../Button';
import './WriteSavvy.scss';

export default class WriteSavvy extends Component {
  render() {
    return (
      <div styleName="container">
        <NavHeader />
        <div styleName="content">
          <div>Write a Savvy</div>
          <div>Title:</div>
          <input type="text" />
          <div>Content:</div>
          <textarea />
          <Button>Submit</Button>
        </div>
      </div>
    );
  }
}
