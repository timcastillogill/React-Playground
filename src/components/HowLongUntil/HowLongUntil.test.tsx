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
        userEvent.click(screen.getByRole("button", { name: "Add Event" }));
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

    describe("When the user has typed event names and hit 'Add Event'", () => {
      test("Then the event name is listed on the screen", () => {
        render(<HowLongUntil />);
        userEvent.type(screen.getByRole("textbox"), "New Event");
        userEvent.click(screen.getByRole("button", { name: "Add Event" }));
        const listItem = screen.getByRole("listitem").innerHTML;
        expect(listItem).toBe("New Event");
      });

      test("Then two event names will be listed on the screen", () => {
        render(<HowLongUntil />);
        userEvent.type(screen.getByRole("textbox"), "New Occasion 1");
        userEvent.click(screen.getByRole("button", { name: "Add Event" }));
        userEvent.type(screen.getByRole("textbox"), "New Occasion 2");
        userEvent.click(screen.getByRole("button", { name: "Add Event" }));

        const list = screen.getAllByRole("listitem");
        const occasion1 = list[0].innerHTML;
        const occasion2 = list[1].innerHTML;
        expect(occasion1).toBe("New Occasion 1");
        expect(occasion2).toBe("New Occasion 2");
      });
    });
  });
});
