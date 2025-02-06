import React from 'react';
import Image from 'next/image';
import { assets } from '../../../assets/assets';
import './Header.css'; 

const Header = () => {
  return (
    <div className="header-container">
      {/* Profile Image */}
      <div className="header-profile">
        <Image src={assets.header_img} alt="Profile" className="profile-img" />
      </div>

      {/* Title with Hand Icon */}
      <h3 className="header-title">
        Dr Parthasarathy
      </h3>

      {/* Description */}
      <h1 className="header-description">
      Marketing expert, program manager, and educator with extensive experience in higher 
      education administration, specialized in neuromarketing, branding, business development, 
      and consumer behaviour. 

      </h1>

      {/* Additional Info */}
      <p className="header-text">
      Currently, international master’s Programme Manager at ESG Luxe 
      and DBA Programme Manager at ESGCI, overseeing academic programs, faculty, 
      student engagement and thesis supervisor for master’s and doctoral students.
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
