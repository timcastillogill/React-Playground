import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HowLongUntil from "./HowLongUntil";

describe("HowLongUntil", () => {
  describe.each([["Hello World"], ["Laurence's Birthday"], ["Tim's Birthday"]])(
    "Given the user has typed '%s' and hit a button",
    (text) => {
      test(`Then it will display '${text}'`, () => {
        render(<HowLongUntil />);

        userEvent.type(screen.getByRole("textbox"), text);
        userEvent.click(screen.getByRole("button"));
        expect(screen.getByText(text)).toBeInTheDocument();
      });
    }
  );

  describe("Given the user wants to add a new event", () => {
    test("Then a button called 'Add Event' is shown", () => {
      render(<HowLongUntil />);
      expect(
        screen.getByRole("button", { name: "Add Event" })
      ).toBeInTheDocument();
    });
  });
});
