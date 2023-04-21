import React, { useState } from "react";

type StandingsInformation = {
  name: string;
  wins: number;
  losses: number;
  rank: number;
  points: number;
};

const useFootballStandings = () => {
  const [footballStandings, setFootballStandings] =
    useState<StandingsInformation>({} as StandingsInformation);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  return <h2>Football Standings Hook</h2>;
};

export default useFootballStandings;
