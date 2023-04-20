import React from "react";
import { render, screen } from "@testing-library/react";
import Football from "./Football";
import userEvent from "@testing-library/user-event";
import useFootballInfo from "../../Hooks/useFootballInfo";

jest.mock("../../Hooks/useFootballInfo");
const mockUseFootballInfo =
  jest.mocked<typeof useFootballInfo>(useFootballInfo);

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
    render(<Football />);

    expect(
      screen.getByRole("button", { name: "Get Info" })
    ).toBeInTheDocument();
  });

  describe("When the user clicks the 'Get Info' button", () => {
    const setup = () => {
      const utils = render(<Football />);
      const getCompetitionsButton = screen.getByRole("button", {
        name: "Get Info",
      });
      return {
        getCompetitionsButton,
        ...utils,
      };
    };

    test("Then a table will appear on screen for the results", () => {
      const { getCompetitionsButton } = setup();
      userEvent.click(getCompetitionsButton);

      expect(screen.getByRole("table")).toBeInTheDocument();
    });

    test("Then the table will have headings 'Name' and 'Gender'", () => {
      const { getCompetitionsButton } = setup();
      userEvent.click(getCompetitionsButton);
      const colHeaderName = screen.getByRole("columnheader", { name: "Debut" });
      const colHeaderGender = screen.getByRole("columnheader", {
        name: "Team Name",
      });

      expect(colHeaderName).toBeInTheDocument();
      expect(colHeaderGender).toBeInTheDocument();
    });

    test("Then the table will show the name and gender of a football player", () => {
      const { getCompetitionsButton } = setup();
      userEvent.click(getCompetitionsButton);

      const nameRow = screen.getByText("1987");
      const genderRow = screen.getByText("Richmond");

      expect(nameRow).toBeInTheDocument();
      expect(genderRow).toBeInTheDocument();
    });
  });
});
