import React from "react";
import useFootballStandings from "../../../Hooks/useFootballStandings";
import "./FootballStandingsInformation.css";

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
      <td className="teamNameData">{teamData.name}</td>
      <td>{teamData.rank}</td>
      <td>{teamData.played}</td>
      <td>{teamData.wins}</td>
      <td>{teamData.losses}</td>
      <td>{teamData.pts}</td>
    </tr>
  ));

  return (
    <section className="teamStandingsContainer">
      <h2>Aussie Rules Team Standings</h2>
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
    </section>
  );
};

export default FootballStandingsInformation;
