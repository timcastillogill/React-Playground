import React from "react";
import useFootballTeamData from "../../Hooks/useFootballInfo";
import Card from "../ui/Card";

const FootballTeamInformation = () => {
  const { isLoading, hasError, data } = useFootballTeamData();

  const getFootballCompInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
    return data;
  };

  return (
    <section>
      <button className="ui-button" onClick={getFootballCompInfo}>
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
