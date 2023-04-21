import React from "react";
import { render, screen } from "@testing-library/react";
import FootballTeamInformation from "./FootballTeamInformation";
import userEvent from "@testing-library/user-event";
import useFootballTeamData from "../../../Hooks/useFootballInfo";

jest.mock("../../../Hooks/useFootballInfo");
const mockUseFootballInfo =
  jest.mocked<typeof useFootballTeamData>(useFootballTeamData);

describe("Given the user navigates to the football information page", () => {
  beforeEach(() => {
    mockUseFootballInfo.mockReturnValue({
      isLoading: false,
      hasError: false,
      data: { debut: 1987, name: "Richmond" },
    });
    jest.clearAllMocks();
  });
  test("When the user wants to see Stats on a football player, they can click a button called 'Get Info'", () => {
    render(<FootballTeamInformation />);

    expect(
      screen.getByRole("button", { name: "Get Info" })
    ).toBeInTheDocument();
  });

  describe("When the user clicks the 'Get Info' button", () => {
    const setup = () => {
      const utils = render(<FootballTeamInformation />);
      const getCompetitionsButton = screen.getByRole("button", {
        name: "Get Info",
      });
      return {
        getCompetitionsButton,
        ...utils,
      };
    };

    test("Then a card will appear on screen for the results with Richmond as the Team name", () => {
      const { getCompetitionsButton } = setup();
      userEvent.click(getCompetitionsButton);

      expect(
        screen.getByRole("heading", { name: /team name: richmond/i })
      ).toBeInTheDocument();
    });

    test("Then the card will have headings 'Name' and 'Debut'", () => {
      const { getCompetitionsButton } = setup();
      userEvent.click(getCompetitionsButton);
      const headerTeamName = screen.getByRole("heading", {
        name: /team name: richmond/i,
      });
      const headerTeamDebut = screen.getByRole("heading", {
        name: /debut year: 1987/i,
      });

      expect(headerTeamName).toBeInTheDocument();
      expect(headerTeamDebut).toBeInTheDocument();
    });
  });
});
