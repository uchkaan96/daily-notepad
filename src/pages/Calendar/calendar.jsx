import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import { Calendar as AntCalendar, Checkbox, Menu } from 'antd';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../css/calendar.css'; 
import Navbar from '../../components/Navbar/Navbar';
import CreateEvent from '../../components/all/createEvent';

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [view, setView] = useState('month');

  const handleMenuClick = (e) => {
    setView(e.key); 
  };

  return (
    <>
      <Navbar />
      <div className="calendar-page">
        <div className="sidebar">
          <CreateEvent />

          <AntCalendar fullscreen={false} style={{ marginBottom: '20px' }} />

          <div className="calendar-filters">
            <h4>My Calendars</h4>
            <Checkbox>Events</Checkbox><br />
            <Checkbox>Tasks</Checkbox><br />
            <Checkbox>Reminder</Checkbox><br />
            <Checkbox>Holidays</Checkbox>
          </div>
        </div>

        <div className="main-calendar">
          <Menu
            onClick={handleMenuClick}
            selectedKeys={[view]} 
            mode="horizontal"
            style={{ marginBottom: '20px' }}
          >
            <Menu.Item key="month">Month</Menu.Item>
            <Menu.Item key="week">Week</Menu.Item>
            <Menu.Item key="day">Day</Menu.Item>
          </Menu>
          
          <BigCalendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            view={view} 
            onView={() => {}}
          />
        </div>
      </div>
    </>
  );
};

export default Calendar;
