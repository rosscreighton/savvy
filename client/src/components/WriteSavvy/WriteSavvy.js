import React, { Component } from 'react';
import NavHeader from '../NavHeader';
import Button from '../Button';
import './WriteSavvy.scss';

export default class WriteSavvy extends Component {
  state = {
    title: '',
    body: '',
    email: '',
  }

  render() {
    return (
      <div styleName="container">
        <NavHeader />
        <div styleName="content">
          <div>Write a Savvy</div>
          <div>Your email:</div>
          <input
            type="email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <div>Title:</div>
          <input
            type="text"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <div>Content:</div>
          <textarea
            value={this.state.body}
            onChange={e => this.setState({ body: e.target.value })}
          />
          <Button>Submit</Button>
        </div>
      </div>
    );
  }
}
