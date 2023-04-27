import React from "react";
import FootballTeamInformation from "../../components/Football/FootballTeamInformation/FootballTeamInformation";
import FootballStandingsInformation from "../../components/Football//FootballStandingsInformation/FootballStandingsInformation";

const FootballPage = () => {
  return (
    <section>
      <FootballTeamInformation />
      <FootballStandingsInformation />
    </section>
  );
};

export default FootballPage;
