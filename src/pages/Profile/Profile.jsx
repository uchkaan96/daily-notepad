import React from 'react';
import '../../css/profile.css'; 
import Navbar from '../../components/Navbar/Navbar'; 
import { HiUser } from "react-icons/hi2";
import backgroundImg from '../../components/assets/ph.jpeg';
import characterImg from '../../components/assets/pro.jpg';

const Profile = () => {  
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-header">
          <img 
            src={backgroundImg}
            alt="background" 
            className="background-image" 
          />
          <div className="profile-icon">
            <span className="icon-placeholder">&#128100;</span>
          </div>
          <h1>Character Profile</h1>
          <p className="quote">Add character quote or favorite saying</p>
        </div>

        <div className="profile-content">
          <div className="character-section">
            <img 
              src={characterImg} 
              alt="Character" 
              className="character-image" 
            />
            <p className="character-link">
              <h2> uchkaan77 </h2>
            </p>
          </div>
          <div className="bio">
            <HiUser />
            <div className="bio-section">
            <h2>Character Bio</h2>
            <ul>
              <li><strong>Name:</strong></li>
              <li><strong>Nickname:</strong></li>
              <li><strong>Age:</strong></li>
              <li><strong>Power:</strong></li>
              <li><strong>Habits and mannerisms:</strong></li>
              <li><strong>Physical description:</strong></li>
              <li><strong>Role in story:</strong></li>
              <li><strong>Want:</strong></li>
              <li><strong>Problem:</strong></li>
              <li><strong>Need:</strong></li>
            </ul>
            </div>
          </div>
          <div className="playlist-section">
            <h2>Playlist</h2>
            <iframe 
              className="playlist-video"
              title="Playlist Video" 
              src="https://www.youtube.com/embed/1AG0IgxGxcQ?si=LgvOz5bFW2H9omyc" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
            <iframe 
              src="https://www.youtube.com/embed/zaAZMe2e5DU?si=YWXjxne8kwyuBAMX"
              className="playlist-video"
              title="Playlist Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
