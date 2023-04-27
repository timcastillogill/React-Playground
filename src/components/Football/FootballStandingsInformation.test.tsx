import { render, screen } from "@testing-library/react";
import FootballStandingsInformation from "./FootballStandingsInformation";
import useFootballStandings from "../../Hooks/useFootballStandings";

jest.mock("../../Hooks/useFootballStandings");
const mockUseFootballStandings =
  jest.mocked<typeof useFootballStandings>(useFootballStandings);

describe("FootballStandings", () => {
  beforeEach(() => {
    const mockData = [
      {
        name: "Richmond",
        rank: 2,
        played: 30,
        wins: 10,
        losses: 20,
        pts: 123,
      },
    ];
    const mockUseFootballStandings = useFootballStandings as jest.Mock;
    mockUseFootballStandings.mockReturnValue({
      isLoading: false,
      hasError: false,
      data: mockData,
    });

    jest.clearAllMocks();
  });

  test("A table will render showing the user the current team standings", () => {
    render(<FootballStandingsInformation />);

    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  describe.each([
    ["Team Name"],
    ["Rank"],
    ["Played"],
    ["Wins"],
    ["Losses"],
    ["Points"],
  ])(
    "The table has particular columns to organise the information",
    (columnHeader) => {
      test(`Then ${columnHeader} will be displayed as a column header`, () => {
        render(<FootballStandingsInformation />);
        expect(screen.getByText(columnHeader)).toBeInTheDocument();
      });
    }
  );

  test("the table will show team standings data", () => {
    render(<FootballStandingsInformation />);

    const teamName = screen.getByText("Richmond");
    const rank = screen.getByRole("cell", { name: /10/i });
    const played = screen.getByRole("cell", { name: /30/i });
    const wins = screen.getByRole("cell", { name: /10/i });
    const losses = screen.getByRole("cell", { name: /20/i });
    const points = screen.getByRole("cell", { name: /123/i });

    expect(teamName).toBeInTheDocument();
    expect(rank).toBeInTheDocument();
    expect(played).toBeInTheDocument();
    expect(wins).toBeInTheDocument();
    expect(losses).toBeInTheDocument();
    expect(points).toBeInTheDocument();
  });
});
