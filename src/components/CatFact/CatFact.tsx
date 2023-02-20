import React, { useEffect, useState } from "react";
import useCatFacts from "../../Hooks/useCatFacts";
import "./CatFact.css";

const CatFact = () => {
  const { isLoading, hasError, data } = useCatFacts();
  const [catFact, setCatFact] = useState("");

  const getCatFact = async () => {
    await setCatFact(data[Math.floor(Math.random() * data.length)]["fact"]);
    return catFact;
  };

  useEffect(() => {
    getCatFact()!;
  }, [data]);

  return (
    <section className="catFact">
      <div className="catFactBox">
        <div className="factText" data-testid="catFactHeading">
          {hasError && <p>Something isn't right in cat land</p>}
          {isLoading ? <h2>Loading...</h2> : <h2>{catFact}</h2>}
        </div>
      </div>
      <div className="factButton">
        <button className="newbtn" onClick={getCatFact}>
          Get me a Cat Fact
        </button>
      </div>
    </section>
  );
};

export default CatFact;
