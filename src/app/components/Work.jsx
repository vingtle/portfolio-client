import React from 'react';
import './Work.css';


const workData = [
  {
    category: "Projects",
    items: [
      "Developed an AI-based chatbot for customer service automation",
      "Created a multi-platform digital marketing strategy",
    ],
  },
  {
    category: "Experience",
    items: [
      "10+ years in international business and marketing",
      "Led product launches in the European and American markets",
    ],
  },
  {
    category: "Achievements",
    items: [
      "Recognized as Top 100 Global Marketing Leaders",
      "Published research in international business journals",
    ],
  },
  {
    category: "Skills",
    items: [
      "Strategic Marketing, Business Development, Brand Mamagement, BtoB and BtoC Marketing, Intellectual Property",
      "Public Speaking, Leadership, Brand Strategy, Creative",
    ],
  }
];

const Work = () => {
  return (
    <div id="work" className="work-container">
      <h2 className="work-title">My Latest Work</h2>
      <div className="work-grid">
        {workData.map((section, index) => (
          <div key={index} className="work-section">
            <h3 className="work-category">{section.category}</h3>
            <ul className="work-list">
              {section.items.map((item, i) => (
                <li key={i} className="work-item">▶ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
