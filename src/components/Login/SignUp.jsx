import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/login.css';

const { Title } = Typography;

const SignUp = () => {
  const navigate = useNavigate(); 

  const handleFinish = (values) => {
    console.log('Form Values:', values);
    navigate('/Home'); 
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="login-navigation">
          <Link to="/login" className="nav-link login-button">Login</Link>
        </div>
      </div>
      <div className="login-box">
        <Title level={3}>Sign Up</Title>
        <Form
          name="signup"
          layout="vertical"
          onFinish={handleFinish}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="example@example.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
