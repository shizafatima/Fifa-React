import React, {createContext, useContext, useEffect, useState} from "react";

const RankingContext = createContext();

export const useRanking = () => useContext(RankingContext)

export const RankingProvider = ({children}) => {
  const [rankings, setRankings] = useState({men: [], women: []});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // useEffect(() => {
  //   const fetchRankings = async () => {
  //     try {
  //       const response = await fetch ('https://api.soccersapi.com/v2.2/leagues/?user=hepeuhutrelo-8149&token=027c4698364a85a82c03ef0d156321c3&t=list');

  //       if (!response.ok) throw new Error ('Failed to fetch rankings');

  //       const data = await response.json();

  //       console.log(data);
        

  //       setRankings(data)
  //     } catch (error){
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchRankings();

  // }, []);

  useEffect(() => {
  setTimeout(() => {
    setRankings({
      men: [
        { rank: 1, team: "Argentina", points: 1886.16, change: "+18.91" },
        { rank: 2, team: "Spain", points: 1854.64, change: "+1.37" },
        { rank: 3, team: "France", points: 1852.71, change: "-7.07" },
        { rank: 4, team: "England", points: 1819.2, change: "+5.39"},
        { rank: 5, team: "Brazil", points: 1776.03, change: "+0.18"}
      ],
      women: [
        { rank: 1, team: "USA", points: 2057.19, change: "-11.87" },
        { rank: 2, team: "Spain", points: 2034.34, change: "+13.74" },
        { rank: 3, team: "Germany", points: 2030.88, change: "+16.15" },
        { rank: 4, team: "Brazil", points: 2004.31 , change: "+26.92"},
        { rank: 5, team: "England", points: 1999.78 , change: "-9.2"}
      ]
    });
    setLoading(false);
  }, 1000);
}, []);


  return (
    <RankingContext.Provider value = {{rankings, loading, error}}>
      {children}
    </RankingContext.Provider>
  );
};