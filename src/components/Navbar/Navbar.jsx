import React, { useState } from 'react';
import '../../css/navbar.css';
import '../../css/login.css';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { RiHomeHeartLine,RiCalendarEventLine,RiChatCheckLine,RiUser5Fill } from "react-icons/ri";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <a href="/" className="logo">Logo</a>
      <nav className="navbar">
      <RiHomeHeartLine className="icon1" /><a href="/">Home</a>
      <RiCalendarEventLine className="icon1" /><a href="/">Calendar</a>
      <RiChatCheckLine className="icon1" /><a href="/">Daily Routine</a>
      <RiUser5Fill className="icon1" /><a href="/">Profile</a>
      </nav>
      <button onClick={toggleMode} className="mode-toggle">
        {darkMode ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </header>
  );
};

export default Navbar;
