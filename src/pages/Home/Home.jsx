import React from 'react';
import { Layout, Menu, Calendar } from 'antd';
import { Link } from 'react-router-dom';
import '../../css/home.css';
import ToDoList from '../../components/all/ToDo_list';
import Weather from '../../components/all/Weather';

const { Sider, Content } = Layout;

const Home = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="pink" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Content style={{ margin: '16px' }}>
          <div className="site-layout-background">
            <h1>Have a good day!</h1>
          </div>
        </Content>

        <Sider collapsible width={350} trigger={null}>
          <div className="calendar-container">
            <Calendar fullscreen={false} />
          </div>
          <div className="todo-weather-container">
            <ToDoList />
            <Weather />
          </div>
        </Sider>
      </Layout>
    </Layout>
  );
};

export default Home;
