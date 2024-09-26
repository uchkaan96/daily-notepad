import React, { useState } from 'react';
import { Button, Modal, Form, Input, DatePicker } from 'antd';
import '../../css/calendar.css';

const CreateEvent = () => {  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log('Event Details:', values);
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" style={{ marginBottom: '20px' }} onClick={showModal}>
        + Create Event
      </Button>

      <Modal
        title="Create New Event"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="title"
            label="Event Title"
            rules={[{ required: true, message: 'Please input the event title!' }]}
          >
            <Input placeholder="Enter event title" />
          </Form.Item>

          <Form.Item
            name="date"
            label="Event Date"
            rules={[{ required: true, message: 'Please select the event date!' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="description"
            label="Event Description"
            rules={[{ required: true, message: 'Please input the event description!' }]}
          >
            <Input.TextArea rows={4} placeholder="Enter event description" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Event
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateEvent;
