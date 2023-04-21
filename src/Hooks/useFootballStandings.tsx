import React, { useState } from "react";

interface StandingsInformation {
  name: string;
  wins: number;
  losses: number;
  rank: number;
}

const useFootballStandings = () => {
  const [footballStandings, setFootballStandings] =
    useState<StandingsInformation>({} as StandingsInformation);
  return <h2>Football Standings Hook</h2>;
};

export default useFootballStandings;
