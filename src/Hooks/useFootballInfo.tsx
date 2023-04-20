import React, { useEffect, useState } from "react";

interface CompetitionInformation {
  debut: number;
  name: string;
}

const useFootballInfo = () => {
  const [data, setData] = useState<CompetitionInformation>(
    {} as CompetitionInformation
  );
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const url = process.env.REACT_APP_FOOTBALL_API_BASE_URL as RequestInfo;

  const fetchData = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json.teams[0]);
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [setData]);
  return {
    isLoading,
    hasError,
    data,
  };
};

export default useFootballInfo;
