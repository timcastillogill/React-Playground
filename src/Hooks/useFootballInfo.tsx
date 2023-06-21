import { useEffect, useState, useCallback } from "react";

interface CompetitionInformation {
  debut: number;
  name: string;
}

const useFootballTeamInfo = (teamId: number) => {
  const [data, setData] = useState<CompetitionInformation>(
    {} as CompetitionInformation
  );
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const url: RequestInfo = `${process.env.REACT_APP_FOOTBALL_API_BASE_URL}?q=teams;team=`;

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const res = await fetch(`${url}${teamId}`);
      const json = await res.json();
      setData(json.teams[0]);
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  }, [url, teamId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return {
    isLoading,
    hasError,
    data,
  };
};

export default useFootballTeamInfo;
