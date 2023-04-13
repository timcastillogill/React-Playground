import React from "react";
import { render, screen } from "@testing-library/react";
import Tennis from "./Tennis";
import userEvent from "@testing-library/user-event";

describe("Given the user navigates to the tennis information page", () => {
  test("When the user wants to see tennis competitions they can click a button called 'Get Tennis Competitions'", () => {
    render(<Tennis />);

    expect(
      screen.getByRole("button", { name: "Get Tennis Competitions" })
    ).toBeInTheDocument();
  });

  describe("When the user clicks the 'Get Tennis Competitions' button", () => {
    const setup = () => {
      const utils = render(<Tennis />);
      const getCompetitionsButton = screen.getByRole("button", {
        name: "Get Tennis Competitions",
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
      const colHeaderName = screen.getByRole("columnheader", { name: "Name" });
      const colHeaderGender = screen.getByRole("columnheader", {
        name: "Gender",
      });

      expect(colHeaderName).toBeInTheDocument();
      expect(colHeaderGender).toBeInTheDocument();
    });
  });
});
