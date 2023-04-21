import { render, screen } from "@testing-library/react";
import FootballStandingsInformation from "./FootballStandingsInformation";
import useFootballStandings from "../../Hooks/useFootballStandings";

jest.mock("../../Hooks/useFootballStandings");
const mockUseFootballStandings =
  jest.mocked<typeof useFootballStandings>(useFootballStandings);

describe("FootballStandings", () => {
  beforeEach(() => {
    const mockData = {
      name: "Richmond",
      wins: 10,
      losses: 20,
      rank: 2,
      points: 123,
    };
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

  test("the table will show the user data on the team and their debut year", () => {
    render(<FootballStandingsInformation />);
  });
});
