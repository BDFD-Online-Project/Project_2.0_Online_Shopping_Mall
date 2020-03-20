import React, { Component } from 'react';

import './login.less';
import logo from './images/logo.jpg';
import { Form, Input, Button } from 'antd';

export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt='logo' />
          <h1>HS 项目：后台管理系统</h1>
        </header>
        <section className='login-content'>
          <h2>用户登入</h2>
          <Form>
            <Form.Item>
              <Input type='username' placeholder='Username' />
            </Form.Item>
            <Form.Item>
              <Input type='password' placeholder='Password' />
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}
