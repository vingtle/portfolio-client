import React from 'react';
import Image from 'next/image';
import { assets } from '../../../assets/assets';
import './Header.css'; 

const Header = () => {
  return (
    <div className="header-container">
      {/* Profile Image */}
      <div className="header-profile">
        <Image src={assets.profile} alt="Profile" className="profile-img" />
      </div>

      {/* Title with Hand Icon */}
      <h3 className="header-title">
        Dr Parthasarathy
        <Image src={assets.hand_icon} alt="Hand Icon" className="hand-icon" />
      </h3>

      {/* Description */}
      <h1 className="header-description">
        A seasoned program manager, educator, and marketing expert 
        with extensive experience in higher education administration, 
        strategic planning, and international business development.
      </h1>

      {/* Additional Info */}
      <p className="header-text">
        Currently serving as Program Manager for ESG Luxe and ESG Sport at 
        Galileo Global Education, he oversees academic program delivery, 
        faculty recruitment, student engagement, and curriculum development.
      </p>

      {/* Buttons */}
      <div className="header-buttons">
        <a href="#contact" className="header-button primary-button">
          Contact Me
          <Image src={assets.right_arrow_white} alt="Arrow Icon" className="button-icon" />
        </a>

        <a href="/Dr.Aparajit_Parthasarathy_CV.pdf" download className="header-button secondary-button">
          My Resume
          <Image src={assets.download_icon} alt="Download Icon" className="button-icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;
