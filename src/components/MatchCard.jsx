// import React from "react";
// import './MatchCard.css';

// function MatchCard() {
//     return (
//         <div className="match-card">

//             {/* Match Card 1 */}
//             <div className="info">
//                 <div>
//                     <p className="subtitle">FIFA World Cup 2025™</p>
//                     <p className="small-text">First stage . Group C . Inter&Co Stadium</p>
//                 </div>
//                 <div className="teams-time">
//                     <div className="teams">
//                         <div className="team">
//                             <span>SLB</span>
//                         </div>
//                         <div className="team">
//                             <span>AKL</span>
//                         </div>
//                     </div>
//                     <div className="match-time">21:00</div>
//                 </div>
//             </div>


//             {/* Match Card 2 */}
//             <div className="info">
//                 <div>
//                     <p className="subtitle">FIFA World Cup 2025™</p>
//                     <p className="small-text">First stage . Group D . Lincoln Financial Team</p>
//                 </div>
//                 <div className="teams-time">
//                     <div className="teams">
//                         <div className="team">
//                             <span>FLA</span>
//                         </div>
//                         <div className="team">
//                             <span>CHE</span>
//                         </div>
//                     </div>
//                     <div className="match-time">20:00</div>
//                 </div>
//             </div>


//             {/* Match Card 3 */}
//             <div className="info">
//                 <div>
//                     <p className="subtitle">FIFA World Cup 2025™</p>
//                     <p className="small-text">First stage . Group B . Rose Bowl Stadium</p>
//                 </div>
//                 <div className="teams-time">
//                     <div className="teams">
//                         <div className="team">
//                             <span>PSG</span>
//                         </div>
//                         <div className="team">
//                             <span>BOT</span>
//                         </div>
//                     </div>
//                     <div className="match-time">24:00</div>
//                 </div>
//             </div>


//             {/* Match card 4 */}

//             <div className="info">
//                 <div>
//                     <p className="subtitle">FIFA World Cup 2025™</p>
//                     <p className="small-text">First stage . Group B . Lumen Field</p>
//                 </div>
//                 <div className="teams-time">
//                     <div className="teams">
//                         <div className="team">
//                             <span>SEA</span>
//                         </div>
//                         <div className="team">
//                             <span>ATM</span>
//                         </div>
//                     </div>
//                     <div className="match-time">03:00</div>
//                 </div>
//             </div>


//             {/* Match Card 5 */}
//             <div className="info">
//                 <div>
//                     <p className="subtitle">FIFA World Cup 2025™</p>
//                     <p className="small-text">First stage . Group A . Mercedes Benz Stadium</p>
//                 </div>
//                 <div className="teams-time">
//                     <div className="teams">
//                         <div className="team">
//                             <span>MIA</span>
//                         </div>
//                         <div className="team">
//                             <span>POR</span>
//                         </div>
//                     </div>
//                     <div className="match-time">05:00</div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default MatchCard


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
