import React, { useEffect, useState } from "react";
import useCatFacts from "../../Hooks/useCatFacts";
import "./CatFact.css";

const CatFact = () => {
  const { isLoading, hasError, data } = useCatFacts();
  const [catFact, setCatFact] = useState("");

  const getCatFact = async () => {
    setCatFact(factRandomiser());
    return catFact;
  };

  const factRandomiser = () => {
    let randomIndex = data[Math.floor(Math.random() * data.length)];
    if (catFact === randomIndex["fact"]) {
      factRandomiser();
    }
    return randomIndex["fact"];
  };

  useEffect(() => {
    getCatFact()!;
  }, [data]);

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
