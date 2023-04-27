import React, { useEffect, useState } from "react";

type StandingsInformation = {
  id: number;
  name: string;
  rank: number;
  played: number;
  wins: number;
  losses: number;
  pts: number;
  error: string;
};

const useFootballStandings = () => {
  const [data, setData] = useState<StandingsInformation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const url: RequestInfo = `${process.env.REACT_APP_FOOTBALL_API_BASE_URL}?q=standings`;

  const fetchData = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const res: any = await fetch(url);
      const json = await res.json();
      setData(json.standings);
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    isLoading,
    hasError,
    data,
  };
};

export default useFootballStandings;
