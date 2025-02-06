import React from 'react';
import { assets, serviceData } from '../../../assets/assets';
import Image from 'next/image';
import './Services.css'; // Import CSS file

const Services = () => {
  return (
    <div id="services" className="services-container">
      {/* Section Title */}
      <h4 className="services-intro">Resources</h4>
      <h2 className="services-title">Expand Your Knowledge with Resources</h2>

      {/* Description */}
      <p className="services-description">
        Beyond academia, Dr. Sarathy has a strong background in marketing and 
        business development. As a visiting professor, he has taught at 
        prestigious business schools across France, including Rennes School of Business,
        EM Normandie, Audencia, ISCOM, and the American Business School of Paris, 
        delivering courses in Retail Analytics, International Business Law, 
        Neuromarketing, and Consumer Behavior.
      </p>

      {/* Resource Cards */}
      <div className="services-grid">
        {serviceData.map(({ icon, title, description }, index) => (
          <div key={index} className="service-card">
            <Image src={icon} alt={title} className="service-icon" />
            <h3 className="service-title">{title}</h3>
            <p className="service-text">{description}</p>
            {/* <a  className="service-readmore">
              Read more <Image src={assets.right_arrow} alt="Arrow" className="readmore-icon" />
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
