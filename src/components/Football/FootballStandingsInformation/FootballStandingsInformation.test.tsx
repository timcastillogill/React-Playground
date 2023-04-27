import { render, screen } from "@testing-library/react";
import FootballStandingsInformation from "./FootballStandingsInformation";
import useFootballStandings from "../../../Hooks/useFootballStandings";

jest.mock("../../../Hooks/useFootballStandings");
const mockUseFootballStandings = useFootballStandings as jest.Mock;

describe("FootballStandings", () => {
  const mockData = [
    {
      id: 1,
      name: "Richmond",
      rank: 2,
      played: 30,
      wins: 10,
      losses: 20,
      pts: 123,
    },
  ];

  beforeEach(() => {
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

  describe("Given there is an error while rendering the component", () => {
    test("Then return an error message to the user", () => {
      mockUseFootballStandings.mockReturnValue({
        isLoading: false,
        hasError: true,
        data: [""],
      });
      jest.clearAllMocks();
      render(<FootballStandingsInformation />);
      const errorMessage = screen.getByRole("heading", {
        name: /⚠️ something has gone wrong with this table, we're working on it! ⚠️/i,
      });

      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe("Given the component is still gathering the information when the screen renders", () => {
    test("Then the component will show a loading message", () => {
      mockUseFootballStandings.mockReturnValue({
        isLoading: true,
        hasError: false,
        data: [""],
      });
      jest.clearAllMocks();
      render(<FootballStandingsInformation />);

      const loadingMessage = screen.getByRole("heading", {
        name: /loading\.\.\./i,
      });

      expect(loadingMessage).toBeInTheDocument();
    });
  });
});
