import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import { assets } from '../../../assets/assets';
import Image from 'next/image';
import './Navbar.css';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className='navbar'>
            <a href="#top" className="navbar-logo">
                <Image src={assets.logodr} alt="Logo" />
            </a>

            <ul className='navbar-links'>
                <li><a href="#top">Home</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#work">My Work</a></li>
                <li><a href="#contact">Connect with me</a></li>
            </ul>

            {/* Theme Toggle Button */}
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "dark" ? (
                    <Image src={assets.sun_icon} alt="Light Mode" className='w-6' />
                ) : (
                    <Image src={assets.moon_icon} alt="Dark Mode" className='w-6' />
                )}
            </button>
        </nav>
    );
};

export default Navbar;
