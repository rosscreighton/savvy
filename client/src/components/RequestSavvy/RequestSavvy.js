import React, { Component } from 'react';
import NavHeader from '../NavHeader';
import Button from '../Button';
import './RequestSavvy.scss';

export default class RequestSavvy extends Component {
  state = {
    value: '',
    email: '',
  }
  render() {
    return (
      <div styleName="container">
        <NavHeader />
        <div styleName="content">
          <div>What should we write our next Savvy about?</div>
          <input
            onChange={e => this.setState({ value: e.target.value })}
            type="text"
            value={this.state.value}
          />
          <div>Your email:</div>
          <input
            type="email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Button>Submit</Button>
        </div>
      </div>
    );
  }
}
