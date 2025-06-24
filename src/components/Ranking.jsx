
// https://api.fifa.com/api/v3/live/football/400019159?language=en
import React from 'react';
import { useRanking } from './RankingContext';
import RankingTable from './RankingTable';

const Ranking = () => {
  const {rankings, loading, error} = useRanking();

  if (loading) return <p>Loading rankings...</p>
  if (error) return <p>Error loading data: {error}</p>
  console.log(rankings);
  

  return (
    <div className="grid-container">
      <RankingTable title="Men's World Ranking" data={rankings.men} />
      <RankingTable title="Women's World Ranking" data={rankings.women} />
    </div>
  );
};

export default Ranking;
