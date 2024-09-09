import React, { useState } from 'react';
import { Layout, Menu, Calendar as AntdCalendar, Badge, Button, Modal, Form, Input, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { PiCalendarDotsThin, PiListChecksLight, PiNotePencilLight } from "react-icons/pi";
import { CiSettings, CiLogout, CiHome } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import '../../css/calendar.css';

const { Sider, Content } = Layout;

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [events, setEvents] = useState([]);

  const getListData = (value) => {
    const dateStr = value.format('YYYY-MM-DD');
    return events.filter(event => event.date === dateStr);
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item, index) => (
          <li key={index}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const onSelect = (date) => {
    setSelectedDate(date);
    setIsModalVisible(true);
  };

  const handleOk = (values) => {
    const newEvent = {
      content: values.content,
      date: values.date.format('YYYY-MM-DD'),
      type: 'success', 
    };
    setEvents([...events, newEvent]);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="pink" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="0" icon={<CiHome />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="1" icon={<PiCalendarDotsThin />}>
            <Link to="/calendar">Calendar</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<PiListChecksLight />}>
            <Link to="/habit">Habit Track</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<PiNotePencilLight />}>
            <Link to="/notepad">Notepad</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<CiSettings />}>
            <Link to="/settings">Settings</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<CiLogout />}>
            <Link to="/">Log out</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Content style={{ padding: '3px' }}>
          <div className="calendar-container">

          <Button type="primary" onClick={() => setIsModalVisible(true)} style={{marginBottom: '6px'}}icon={<FiPlus />}>
            New Event
          </Button>
            <AntdCalendar 
              dateCellRender={dateCellRender}
              onSelect={onSelect} 
            />
          </div>
          <Modal 
            title="Create New Event/Task" 
            visible={isModalVisible} 
            onCancel={handleCancel}
            footer={null}
          >
            <Form
              layout="vertical"
              onFinish={handleOk}
              initialValues={{
                date: selectedDate ? moment(selectedDate) : moment(),
              }}
            >
              <Form.Item
                label="Title"
                name="content"
                rules={[{ required: true, message: 'Please input the event or task!' }]}
              >
                <Input placeholder="Enter event or task" />
              </Form.Item>
              <Form.Item
                label="Date"
                name="date"
                rules={[{ required: true, message: 'Please select a date!' }]}
              >
                <DatePicker />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </Content>

        <Sider collapsible width={350} trigger={null}>
          <div className="calendar-container">
            <AntdCalendar fullscreen={false} />
          </div>
          <div className="todo-weather-container">
            {/* <ToDoList /> */}
            {/* <Weather /> */}
          </div>
        </Sider>
      </Layout>
    </Layout>
  );
};

export default Calendar;
