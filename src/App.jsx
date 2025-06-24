import { useTransition, useState, useEffect } from 'react';
import './App.css';

import HeroSection from './components/HeroSection';
import MatchCard from './components/MatchCard';
import HighlightCard from './components/Highlight';
import Header from './components/Header';
import TopStories from './components/TopStories'
import { RankingProvider } from './components/RankingContext';
import Ranking from './components/Ranking';
import Button  from './components/Button';
import InsideFifa from './components/InsideFifa';




const matches = [
  {
    group: "Group G",
    stadium: "Mercedes-Benz Stadium",
    date: "Today",
    teamA: { code: "MCI", logo: "/MCI.png", name: "Manchester City" },
    teamB: { code: "AIN", logo: "/AIN.png", name: "Al Ain" },
    scoreA: 6,
    scoreB: 0,
    time: "00:00",
    status: "FT"
  },
  {
    group: "Group H",
    stadium: "Audi Field",
    date: "Today",
    teamA: { code: "SAL", logo: "/SAL.png", name: "Salzburg" },
    teamB: { code: "HIL", logo: "/HIL.png", name: "Al Hilal" },
    scoreA: 0,
    scoreB: 0,
    time: "00:00",
    status: "FT"
  },
  {
    group: "Group H",
    stadium: "Bank of America Stadium",
    date: "Today",
    teamA: { code: "RMA", logo: "/RMA.png", name: "Real Madrid" },
    teamB: { code: "PAC", logo: "/PAC.png", name: "Pachuca" },
    scoreA: 3,
    scoreB: 1,
    time: "00:00",
    status: "FT"
  },
  {
    group: "Group B",
    stadium: "Lumen Field",
    date: "24/06/2025",
    teamA: { code: "SEA", logo: "/SEA.png", name: "Seattle Sounders" },
    teamB: { code: "PSG", logo: "/PSG.png", name: "PSG" },
    scoreA: null,
    scoreB: null,
    time: "00:00",
    status: "upcoming"
  }
];


function App() {

  return (
    <div className='container'>
      <Header />
      <HeroSection />
      <h2 className="title">Follow the FIFA Club World Cup 2025™</h2>
      <div className="match-grid">
        {matches.map((match, index) => (
          <MatchCard key={index} {...match} />
        ))}
      </div>

      <h2 className='title'>Club World Cup Highlights</h2>
      <HighlightCard />
      <TopStories />
      <RankingProvider>
        <Ranking/>
      </RankingProvider>
      <Button/>
        <h2 className='title'>Inside FIFA</h2>
      <InsideFifa></InsideFifa>
     
    </div>
  )
}
export default App
