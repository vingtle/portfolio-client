import React from 'react';
import './Footer.css';
import Image from 'next/image';
import mail_icon from '../../../assets/mail_icon.svg';
import { assets } from '../../../assets/assets';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <a href="#top" className="footer-logo">
          <Image src={assets.logodr} alt="Logo" className="footer-logo-img" />
        </a>
        <div className="footer-contact">
          <Image src={mail_icon} alt="Mail Icon" className="footer-mail-icon" />
          <p className="footer-email">aparajit_88@icloud.com</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="footer-divider" />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Dr Parthasarathy. All rights reserved.</p>
        <div className="footer-bottom-right">
          <a href="/terms">Terms of Services</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="#contact">Connect with me</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
