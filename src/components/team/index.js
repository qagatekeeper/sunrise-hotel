import React, { useState } from "react";
import "./team.css";
import team1 from "../../asserts/images/teams1.jpg";
import team2 from "../../asserts/images/teams2.jpg";
import team3 from "../../asserts/images/teams3.jpg";
import team4 from "../../asserts/images/teams4.jpg";
import teamb1 from "../../asserts/images/teamb1.jpg";
import teamb2 from "../../asserts/images/teamb2.jpg";
import teamb3 from "../../asserts/images/teamb3.jpg";
import teamb4 from "../../asserts/images/teamb4.jpg";

import TeamList from "./teamList";
import TeamContainer from "./teamContainer";

const teamlist = [
  {
    id: 1,
    img: team1,
    name: "Lucas Jimenez",
  },
  {
    id: 2,
    img: team2,
    name: "Sarah Connor",
  },
  {
    id: 3,
    img: team3,
    name: "Ivan Simpson",
  },
  {
    id: 4,
    img: team4,
    name: "Marc Gutierrez",
  },
];

const teamContainerData = [
  {
    id: 1,
    teamLeaderImage: teamb1,
    teamLeaderName: "Lucas Jimenez",
    teamLeaderPosition: "Manager",
    teamLeaderPositionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Lorem ipsum dolor .",
  },
  {
    id: 2,
    teamLeaderImage: teamb2,
    teamLeaderName: "Sarah Connor",
    teamLeaderPosition: "Receptionist",
    teamLeaderPositionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Lorem ipsum dolor .",
  },
  {
    id: 3,
    teamLeaderImage: teamb3,
    teamLeaderName: "Ivan Simpson",
    teamLeaderPosition: "Manager",
    teamLeaderPositionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Lorem ipsum dolor .",
  },
  {
    id: 4,
    teamLeaderImage: teamb4,
    teamLeaderName: "Marc Gutierrez",
    teamLeaderPosition: "Receptionist",
    teamLeaderPositionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Lorem ipsum dolor .",
  },
];

const Team = () => {
  const [activeTeb, setActiveTeb] = useState("Lucas Jimenez");
  console.log(activeTeb);
  return (
    <div className="team-wrapper" id="team">
      <div className="max-width text-center">
        <h1 className="tema-title">Meet Our Team</h1>
        <div className="team-tab-list">
          {teamlist.map((teamData, index) => (
            <TeamList
              activeTeb={activeTeb}
              setActiveTeb={setActiveTeb}
              teamImg={teamData.img}
              name={teamData.name}
              key={index}
            />
          ))}
        </div>
        <div className="team-list-container">
          {teamContainerData.map((teamLeaderData, index) => (
            <TeamContainer
              activeTeb={activeTeb}
              image={teamLeaderData.teamLeaderImage}
              name={teamLeaderData.teamLeaderName}
              position={teamLeaderData.teamLeaderPosition}
              positionDescription={teamLeaderData.teamLeaderPositionDescription}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
