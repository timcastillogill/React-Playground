import { useEffect, useState } from "react";

const useCatFacts = () => {
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const catURL = process.env.REACT_APP_CAT_FACT_URL as RequestInfo;

  const fetchData = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const res = await fetch(catURL);
      const json = await res.json();
      setData(json.data);
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

export default useCatFacts;
