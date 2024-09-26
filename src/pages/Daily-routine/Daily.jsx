import React, { useState, useEffect } from 'react';
import { Checkbox, Table, Progress, Button, Input, Modal, Form, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import '../../css/daily.css';
import Navbar from '../../components/Navbar/Navbar';

const Daily = () => {
  const [habitData, setHabitData] = useState('');
  const [isHabitModalVisible, setIsHabitModalVisible] = useState(false);
  const [habitForm] = Form.useForm();
  const [mood, setMood] = useState(''); 
  const [imageUrl, setImageUrl] = useState(null); 

  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    period: 'AM',
    day: 'SUNDAY',
  });

  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const day = date.toLocaleString('en-US', { weekday: 'long' });

      const period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;

      setTime({
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        period,
        day,
      });
    };

    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const showHabitModal = () => setIsHabitModalVisible(true);

  const handleHabitSubmit = (values) => {
    setHabitData([...habitData, { task: values.task, days: [false, false, false, false, false, false, false], progress: 0 }]);
    setIsHabitModalVisible(false);
    habitForm.resetFields();
  };

  const deleteHabit = (task) => { 
    setHabitData(habitData.filter(habit => habit.task !== task));
    // testing this line 
  };

  const calculateProgress = (days) => {
    const completedDays = days.filter(day => day === true).length;
    return Math.round((completedDays / 7) * 100);
  };

  const handleCheckboxChange = (task, dayIndex) => {
    const updatedHabitData = habitData.map(habit => {
      if (habit.task === task) {
        const updatedDays = [...habit.days];
        updatedDays[dayIndex] = !updatedDays[dayIndex];
        const progress = calculateProgress(updatedDays);
        return { ...habit, days: updatedDays, progress};
      }
      return habit;
    });
    setHabitData(updatedHabitData);
  };

  const saveHabitProgress = () => {
    console.log('Habit progress saved:', habitData);
  }; 
  
  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleImageUpload = (info) => {
    if (info.file.status === 'done') {
      setImageUrl(URL.createObjectURL(info.file.originFileObj)); 
    }
  };

  const columns = [
    { title: 'Task', dataIndex: 'task', key: 'task' },
    { title: 'Mon', dataIndex: 'mon', key: 'mon', render: (_, record) => <Checkbox checked={record.days[0]} onChange={() => handleCheckboxChange(record.task, 0)} /> },
    { title: 'Tue', dataIndex: 'tue', key: 'tue', render: (_, record) => <Checkbox checked={record.days[1]} onChange={() => handleCheckboxChange(record.task, 1)} /> },
    { title: 'Wed', dataIndex: 'wed', key: 'wed', render: (_, record) => <Checkbox checked={record.days[2]} onChange={() => handleCheckboxChange(record.task, 2)} /> },
    { title: 'Thu', dataIndex: 'thu', key: 'thu', render: (_, record) => <Checkbox checked={record.days[3]} onChange={() => handleCheckboxChange(record.task, 3)} /> },
    { title: 'Fri', dataIndex: 'fri', key: 'fri', render: (_, record) => <Checkbox checked={record.days[4]} onChange={() => handleCheckboxChange(record.task, 4)} /> },
    { title: 'Sat', dataIndex: 'sat', key: 'sat', render: (_, record) => <Checkbox checked={record.days[5]} onChange={() => handleCheckboxChange(record.task, 5)} /> },
    { title: 'Sun', dataIndex: 'sun', key: 'sun', render: (_, record) => <Checkbox checked={record.days[6]} onChange={() => handleCheckboxChange(record.task, 6)} /> },
    { title: 'Progress', key: 'progress', render: (_, record) => <Progress percent={record.progress} /> },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button type="link" onClick={() => deleteHabit(record.task)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="daily-container">
        <div className="clock-container">
          <div className="clock">
            <div className="clock-time">{time.hours}</div>
            <div className="clock-time">{time.minutes}</div>
          </div>
          <div className="clock-text">
            <div className="clock-period">{time.period}</div>
            <div className="clock-day">{time.day.toUpperCase()}</div>
          </div>
        </div>

        <div className="habit-tracker">
          <h2>Habit Tracker</h2>
          <Table
            dataSource={habitData}
            columns={columns}
            pagination={false}
            rowKey="task"
          />
          <div className="button-container">
            <Button type="primary" onClick={showHabitModal} className="btn-add">Add Habit</Button>
            <Button type="primary" onClick={saveHabitProgress} className="btn-save">Save</Button>
          </div>
        </div>

        <Modal
          title="Add Habit"
          visible={isHabitModalVisible}
          onCancel={() => setIsHabitModalVisible(false)}
          footer={null}
        >
          <Form form={habitForm} onFinish={handleHabitSubmit}>
            <Form.Item
              name="task"
              rules={[{ required: true, message: 'Please input your habit task!' }]}
            >
              <Input placeholder="Habit Task" />
            </Form.Item>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: '#08a9d2', borderColor: '#08a9d2' }}>Add Habit</Button>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default Daily;
