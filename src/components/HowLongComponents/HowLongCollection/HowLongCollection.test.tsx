import React from "react";
import HowLongCollection from "./HowLongCollection";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("HowLongCollection", () => {
  describe("Given the user has inputted an event into the input", () => {
    test("Then the user will see a list of event NAMES", () => {
      render(<HowLongCollection />);

      const input = screen.getByRole("textbox");

      // userEvent(input, "Laurence's Birthday")

      userEvent.type(screen.getByRole("textbox"), "Hello,{enter}World!");
      expect(screen.getByRole("textbox")).toHaveValue("Hello,\nWorld!");

      const eventList = screen.getByRole("list");
      const eventItem = screen.getByText("My Birthday");
      // expect(eventList).toContainElement(eventItem);
    });
  });
});
