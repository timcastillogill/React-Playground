import React, { useEffect, useState } from "react";
import useCatFacts from "../../Hooks/useCatFacts";
import "./CatFact.css";
import { useCallback } from "react";

const CatFact = () => {
  const { isLoading, hasError, data } = useCatFacts();
  const [catFact, setCatFact] = useState("");

  const getCatFact = useCallback(async () => {
    if (data && data.length > 0) {
      const indexRandomiser = Math.floor(Math.random() * 10);
      setCatFact(data[indexRandomiser]["fact"]!);
    }
    return catFact;
  }, [data, catFact]);

  useEffect(() => {
    getCatFact();
  }, [data, getCatFact]);

  return (
    <section className="catFact">
      <div className="catFactBox">
        <div className="factText" data-testid="catFactHeading">
          {hasError && (
            <p data-testid="errorMessage">Something isn't right in cat land</p>
          )}
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <h2 id="catFactText">{catFact}</h2>
          )}
        </div>
      </div>
      <div className="factButton">
        <button className="ui-button" onClick={getCatFact}>
          Get me a Cat Fact
        </button>
      </div>
    </section>
  );
};

export default CatFact;
