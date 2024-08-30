import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { Link, useNavigate  } from 'react-router-dom';
import { PiNotePencilLight } from "react-icons/pi";
import '../../css/login.css';

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate(); 

  const handleFinish = (values) => {
    console.log('Form Values:', values);
    navigate('/Home'); 
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <PiNotePencilLight alt="Daily-Routine" className="login-logo" />
        <div className="login-navigation">
          <Link to="/login" className="nav-link login-button">Login</Link>
          <Link to="/signup" className="nav-link signup-button">Sign Up</Link>
        </div>
      </div>
      <div className="login-box">
        <Title level={3}>Login</Title>
        <Form
          name="login"
          layout="vertical"
          onFinish={handleFinish}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="m@example.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item>
            <Link to="/forgot-password" className="forgot-password-link">
              Forgot password?
            </Link>
          </Form.Item> */}

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
