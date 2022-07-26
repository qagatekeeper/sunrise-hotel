import React from "react";
import "./experience.css";
import ExpCard from "./expCard";

const cardData = [
  {
    id: 1,
    icon: <i class="fa-solid fa-bed"></i>,
    title: "MASTER BEDROOMS",
  },
  {
    id: 2,
    icon: <i class="uil uil-table"></i>,
    title: "SEA VIEW BALCONY",
  },
  {
    id: 3,
    icon: <i class="uil uil-coffee"></i>,
    title: "LARGE CAFE",
  },
  {
    id: 4,
    icon: <i class="fa-solid fa-wifi"></i>,
    title: "WIFI COVERAGE",
  },
];

const Experience = () => {
  return (
    <div className="exp-wrapper">
      <div className="exp-title">
        <div>
          <a href="#123" className="exp-link">
            ROOM RESERVATION
          </a>
        </div>
      </div>
      <div className="exp-content flex absolute-center">
        <div className="exp-container">
          <div className="exp-top">
            <div className="exp-text">
              <span>Experience a good stay, enjoy fantastic offers</span>
              Find our friendly welcoming reception
            </div>
          </div>
          <div className="exp-bottom">
            {cardData.map((data, i) => (
              <ExpCard title={data.title} icon={data.icon} />
            ))}
            {/* <ExpCard title={cardData[0].title} icon={cardData[0].icon} />
            <ExpCard title={cardData[1].title} icon={cardData[1].icon} />
            <ExpCard title={cardData[2].title} icon={cardData[2].icon} />
            <ExpCard title={cardData[3].title} icon={cardData[3].icon} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
