import React from 'react';
import './Work.css';


const workData = [
  {
    category: "Supervisions",
    items: [
      "Bachelors level [ Completed: 10 studens & In progress: 3 students.]",
      "Masters'level [ Completed: 16 students & In progress: 2 students.]",
      "Doctoral level [ In progress: 5 students.]",
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
      "Most Unique Product: Innate, F&B Beverages 2017",
      "Best Packaging Design: German Design Awards, Innate, F&B Beverages 2019",
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
