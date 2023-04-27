import React, { Fragment } from "react";
import useFootballStandings from "../../Hooks/useFootballStandings";
import { Http2ServerRequest } from "http2";

const FootballStandingsInformation = () => {
  const { isLoading, hasError, data } = useFootballStandings();

  const headerTitles = [
    "Team Name",
    "Rank",
    "Played",
    "Wins",
    "Losses",
    "Points",
  ];

  const tableHeaders = headerTitles.map((header, index) => (
    <th key={index}>{header}</th>
  ));

  const tableRows = data.map((teamData) => (
    <tr key={teamData.id}>
      <td>{teamData.name}</td>
      <td>{teamData.rank}</td>
      <td>{teamData.played}</td>
      <td>{teamData.wins}</td>
      <td>{teamData.losses}</td>
      <td>{teamData.pts}</td>
    </tr>
  ));

  return (
    <Fragment>
      {hasError && (
        <h3>
          ⚠️ Something has gone wrong with this table, we're working on it! ⚠️
        </h3>
      )}
      {isLoading && !hasError && <h2>Loading...</h2>}
      {!isLoading && !hasError && (
        <table>
          <tbody>
            <tr>{tableHeaders}</tr>
            {tableRows}
          </tbody>
        </table>
      )}
    </Fragment>
  );
};

export default FootballStandingsInformation;
