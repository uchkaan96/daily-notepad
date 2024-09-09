import React, { useState } from 'react';
import { Layout, Menu, Button, Calendar as AntdCalendar, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { PiCalendarDotsThin, PiListChecksLight, PiNotePencilLight } from "react-icons/pi";
import { CiSettings, CiLogout, CiHome } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '../../css/habit.css';
import moment from 'moment';
import AddHabit from '../../components/all/Addhabit';

const { Sider } = Layout;

const habits = [
{ name: 'Exercise', icon: '💪', color: '#00aaff', days: [false, true, false, true, false, true, false], total: 2 },
{ name: 'Journal', icon: '📝', color: '#9b59b6', days: [true, true, true, true, true, true, true], total: 7 },
{ name: 'Alcohol', icon: '❌', color: '#e74c3c', days: [false, true, false, false, true, true, true], total: 3 },
{ name: 'Cold Shower', icon: '🚿', color: '#3498db', days: [false, false, false, true, false, false, false], total: 1 },
{ name: 'Floss', icon: '🦷', color: '#2ecc71', days: [true, false, true, false, true, false, true], total: 3 },
{ name: 'Meditate', icon: '🧘‍♂️', color: '#e67e22', days: [false, true, false, true, false, true, true], total: 3 },
{ name: 'eBook', icon: '🎧', color: '#1abc9c', days: [true, false, true, false, true, false, true], total: 3 }]; 

const Habit = () => {
    const weekStart = moment().startOf('week').format('ddd, MMM D');
    const weekEnd = moment().endOf('week').format('ddd, MMM D');

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

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible>
                <div className="logo" />
                <Menu theme="pink" mode="inline" defaultSelectedKeys={['0']}>
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
                <div className="habit-tracker">
                    <header className="habit-header">
                        <div className="header-left">
                            <Button icon={<LeftOutlined />} />
                            <span>{weekStart} - {weekEnd}</span>
                            <Button icon={<RightOutlined />} />
                        </div>
                        <div className="header-right">
                            <Button type="primary" icon={<FiPlus />} onClick={showModal}>
                                Add Habit
                            </Button>
                        </div>
                    </header>

                    <div className="habit-grid">
                        <div className="grid-header">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                <div key={day} className="grid-day">{day}</div>
                            ))}
                        </div>

                        {habits.length === 0 ? (
                            <div className="no-habits"></div>
                        ) : (
                            habits.map((habit, index) => (
                                <div key={index} className="habit-row">
                                    <div className="habit-name">
                                        <span style={{ color: habit.color }}>{habit.icon}</span> {habit.name}
                                    </div>
                                    <div className="habit-days">
                                        {habit.days.map((day, dayIndex) => (
                                            <div 
                                                key={dayIndex} 
                                                className={`habit-day ${day ? 'completed' : ''}`} 
                                                style={{ backgroundColor: day ? habit.color : '#f0f0f0' }}
                                            >
                                                {day ? <span>&#10003;</span> : ''}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="habit-total">{habit.total} / {habit.days.length}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <Modal
                    title="Add a New Habit"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <AddHabit />
                </Modal>
            </Layout>
        </Layout>
    );
};

export default Habit;
