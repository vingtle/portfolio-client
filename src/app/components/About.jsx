import React, { useState } from 'react';
import Image from 'next/image';
import { assets, toolsData } from '../../../assets/assets';
import { FaGraduationCap, FaFolderOpen, FaBook } from "react-icons/fa";
import './About.css';

const infoList = [
  {
    icon: <FaBook size={30} color="white" />,
    title: "Publications",
    description: `An Exploratory Research on Brands Using Emotional Neuromarketing and Persuasion to Make Parents an Unwitting Messenger of Brands to Their Children.
    
    While brands using emotional neuromarketing, the research is aimed to understand if people still have free choice in choosing what they consume or not and is it ethical to make parents unwitting messengers of brands and introduce products to their child(ren). 
    
    This technique helps in connecting with the brand emotionally without investing a lot of money, attracting two generations of audience at the same time through information processing and determining the essence and emotional values using four pillars of emotional branding and persuasion tactics.
    
    The study focuses on four brands – Omega, Hermès, Nespresso, and Nature et Découvertes on case study analysis to dissect their emotional neuromarketing approaches embedded in the business. 
    
    The results show how a young uncluttered mind is manipulated emotionally and brought into the brand’s world without any intended act. In a free market, consumers and most importantly children should be able to choose from their conscious processing. However, it begs the question of whether they actually do have any opportunity or choice to think.
    
    It also sheds light on how people are made to think it was their mindful decision-making, but in fact, it is not in reality. In the future, how children start thinking that the products bought from brands remind and connect with their parents emotionally is questionable.

    Keywords: Neuromarketing; emotions; storytelling; unconsciousness; unwitting; ethics.`
  },
  {
    icon: <FaGraduationCap size={30} color="white" />,
    title: "Education",
    description: "Doctorate in Neuromarketing - International School of Management, Paris. MBA in Marketing and Communication - INSEEC Business School, Paris. Masters in Nanotechnology - University of Manchester",
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
          His entrepreneurial drive led to the launch of the award-winning organic brand, Innate. 
          With expertise in marketing, branding and business development, he consults on brand 
          growth and emotional content strategy. Additionally, he is a visiting professor at top 
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
                      {index < 2 ? `"${sentence}"` : sentence + "."}
                    </span>
                      ))
                    : selectedAbout.title === "Education"
                    ? selectedAbout.description.split('. ').map((school, index) => (
                      <span key={index}>
                        {school}.
                        <br />
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
