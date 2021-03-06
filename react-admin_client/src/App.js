import React, { Component } from 'react';
import { Button, message } from 'antd';

export default class App extends Component {
  handleClick = () => {
    message.success('This is a success message');
  };
  render() {
    return (
      <div>
        <Button type='primary' onClick={this.handleClick}>
          Primary
        </Button>
      </div>
    );
  }
}
