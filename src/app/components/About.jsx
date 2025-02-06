import React, { useState } from 'react';
import Image from 'next/image';
import { assets, toolsData } from '../../../assets/assets';
import { FaGraduationCap, FaFolderOpen, FaBook } from "react-icons/fa";
import './About.css';

const infoList = [
  {
    icon: <FaBook size={30} color="white" />,
    title: "Publications",
    description: "How brands use emotional fragility using neuromarketing techniques to make parents an unwitting messenger of brands to their children. This exploratory research examines how brands leverage emotional neuromarketing and persuasive strategies to influence parents as unwitting messengers, shaping children's brand preferences and purchasing behavior. By analyzing marketing techniques that appeal to parental emotions—such as trust, care, and responsibility—this study highlights the subconscious role parents play in brand communication. The findings provide insights into ethical considerations, consumer behavior, and the psychological mechanisms brands employ to establish early brand loyalty in children through parental influence.",
  },
  {
    icon: <FaGraduationCap size={30} color="white" />,
    title: "Education",
    description: "International School of Management, Paris - Doctorate in Neuromarketing, INSEEC Business School, Paris - MBA in Marketing and Communication, University of Manchester, Manchester Masters in Nanotechnology.",
  },
  {
    icon: <FaFolderOpen size={30} color="white" />,
    title: "Projects",
    description: "Over 15 years of working in the field with successful brand launches and international partnerships.",
  }
];

const About = () => {
  const [selectedAbout, setSelectedAbout] = useState(null);

  const openPopup = (about) => {
    setSelectedAbout(about);
  };

  const closePopup = () => {
    setSelectedAbout(null);
  };

  return (
    <div id="about" className="about-container">
      {/* Section Title */}
      <h4 className="about-intro">Introduction</h4>
      <h2 className="about-title">About Me</h2>

      {/* Content */}
      <div className="about-content">
        {/* Profile Image */}
        <div className="about-image">
          <Image src={assets.about_img} alt="user" className="user-img" />
        </div>

        {/* Text & Information */}
        <div className="about-text">
          <p className="about-description">
          Dr. Parthasarathy, a former shareholder and Head of International Marketing & Distribution 
          at F&F Beverages, played a key role in global expansion, brand strategy, and digital marketing. 
          His entrepreneurial drive led to the launch of the award-winning organic brand Innate. 
          With expertise in marketing, SEO, and business development, he consults on brand 
          growth and content strategy. Additionally, he is a visiting professor at top 
          French business schools, bridging academia and industry.

          </p>

          {/* Info List */}
          <ul className="about-info-list">
            {infoList.map((about, index) => (
              <li className="info-item" key={index}>
                <div className="info-icon">{about.icon}</div> {/* Render React Icon */}
                <h3 className="info-title">{about.title}</h3>
                <p className="info-description">{about.description.substring(0, 80)}...</p>
                <div className='about-readmore' onClick={() => openPopup(about)}>
                  Read more
                  <Image src={assets.right_arrow} alt='Read more' />
                </div>
              </li>
            ))}
          </ul>

          {/* Soft Skills Section */}
          <h4 className="about-softskills">Soft Skills</h4>
          <ul className="about-tools">
            {toolsData.map((tool, index) => (
              <li className="tool-item" key={index}>
                <Image src={tool} alt="Tool" className="tool-icon" />
              </li>
            ))}
          </ul>

          {/* Popup Modal */}
          {selectedAbout && (
            <div className='popup-overlay' onClick={closePopup}>
              <div className='popup-content' onClick={(e) => e.stopPropagation()}>
                <h2>{selectedAbout.title}</h2>
                <p>
                  {selectedAbout.title === "Publications"
                  ? selectedAbout.description.split('. ').map((sentence, index) => (
                    <span key={index}>
                      {index < 2 ? `'${sentence}'` : sentence + "."}
                    </span>
                      ))
                    : selectedAbout.description}
                </p>
                <button className='close-btn' onClick={closePopup}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
