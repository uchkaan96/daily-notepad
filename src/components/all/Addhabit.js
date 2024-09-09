import React, { useState } from 'react';
import { Button, DatePicker, Form, Input } from 'antd';

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const AddHabit = () => {
  const [form] = Form.useForm();

  return (
    <Form
      {...formItemLayout}
      form={form}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: 'filled' }}
    >
      <Form.Item
        label="Habit Name"
        name="habitName"
        rules={[{ required: true, message: 'Please input the habit name!' }]}
      >
        <Input placeholder="Enter your habit name" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input the description!' }]}
      >
        <Input.TextArea placeholder="Describe your habit" />
      </Form.Item>

      <Form.Item
        label="Time Range"
        name="timeRange"
        rules={[{ required: true, message: 'Please select a time range!' }]}
      >
        <RangePicker />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="save">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddHabit;
