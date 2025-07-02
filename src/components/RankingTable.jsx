import React from "react";
import './Ranking.css'

const RankingTable = ({ title, data }) => {
  return (
    <div>
        <h3>{title}</h3>
      <div className="card">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>Points</th>
              <th>+/-</th>
            </tr>
          </thead>
          <tbody>
            {data.map((team) => (
              <tr key={team.rank}>
                <td>{team.rank}</td>
                <td>{team.team}</td>
                <td>{team.points}</td>
                <td>{team.change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankingTable;
