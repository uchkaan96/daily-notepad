import React from 'react';
import '../../css/home.css';
import Navbar from '../../components/Navbar/Navbar'; 

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-custom">
        <div className="grid-item">Personal finance</div>
        <div className="grid-item">Education</div>
        <div className="grid-item">Travel</div>
        <div className="grid-item">Health</div>
        <div className="grid-item">Technology</div>
      </div>
    </>
  );
};

export default Home;
