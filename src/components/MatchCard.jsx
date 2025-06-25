import React from "react";
import "./MatchCard.css"; 

const MatchCard = ({ group, stadium, date, teamA, teamB, scoreA, scoreB, status  }) => {
  return (
    <div className="match-card">
      <div className="match-header">
        <div className="match-title">FIFA Club World Cup 2025™</div>
        <div className="match-subtitle">{group} – {stadium}</div>
        <div className="match-date">{date}</div>
      </div>

      <div className="match-body">
        <div className="team">
          <img src={teamA.logo} alt={teamA.name} />
          <span>{teamA.code}</span>
        </div>

        <div className="score">
          <span>{scoreA}</span> - <span>{scoreB}</span>
        </div>

        <div className="team">
          <img src={teamB.logo} alt={teamB.name} />
          <span>{teamB.code}</span>
        </div>
      </div>

      <div className="match-footer">{status}</div>
    </div>
  );
};

export default MatchCard;
