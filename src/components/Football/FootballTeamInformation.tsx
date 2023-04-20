import React, { useState } from "react";
import useFootballTeamData from "../../Hooks/useFootballInfo";
import Card from "../ui/Card";

const FootballTeamInformation = () => {
  const [teamId, setTeamId] = useState(14);
  const { isLoading, hasError, data } = useFootballTeamData(teamId);

  const getFootballTeamInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const randomId = Math.floor(Math.random() * (18 - 1 + 1)) + 1;
    setTeamId(randomId);
  };

  return (
    <section>
      <button className="ui-button" onClick={getFootballTeamInfo}>
        Get Info
      </button>
      {hasError && (
        <h3>Something hasn't gone to plan. Please click the button again</h3>
      )}
      {isLoading && !hasError && <h2>Loading...</h2>}
      {!hasError && !isLoading && (
        <Card className={"teamCard"} name={data.name} debut={data.debut} />
      )}
    </section>
  );
};

export default FootballTeamInformation;
