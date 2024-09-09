import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'; 
import Calendar from './pages/Calendar/Calendar'; 
import Habit from './pages/Habit/Habit';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/habit" element={<Habit/>} />
      </Routes>
    </Router>
  );
}

export default App;
