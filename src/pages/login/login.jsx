import React, { Component } from 'react';

import './login.less';
import logo from './images/logo.jpg';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
class Login extends Component {
  render() {
    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt='logo' />
          <h1>HS 项目：后台管理系统</h1>
        </header>
        <section className='login-content'>
          <h2>用户登入</h2>
          <Form
            onSubmit={this.handleSubmit}
            name='normal_login'
            className='login-form'
          >
            <Form.Item name='username'>
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='Username'
              />
            </Form.Item>
            <Form.Item name='password'>
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Password'
              />
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                Log in
              </Button>
              {/* Or <a href=''>register now!</a> */}
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

// //高阶函数，高阶组件 （包装Form组件生成一个新的组件）
// const WrapLogin = Form.create()(Login);
export default Login;
