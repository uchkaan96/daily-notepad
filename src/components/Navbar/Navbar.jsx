import React, { useState } from 'react';
import '../../css/navbar.css';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { GiBalloonDog } from "react-icons/gi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <a href="/" className="logo">Logo</a>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/">Calendar</a>
        <a href="/">Daily Routine</a>
        <a href="/">Profile</a>
      </nav>
      <button onClick={toggleMode} className="mode-toggle">
        {darkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </header>
  );
};

export default Navbar;
