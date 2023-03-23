import React from "react";
import HowLongCollection from "./HowLongCollection";
import { render, screen } from "@testing-library/react";

describe("Given the user has inputted an event into the input", () => {
  test("Then the user will see a list of event NAMES", () => {
    const inputtedEventName = "Holidays";
    const inputtedEventDate = "2025-01-01";

    render(<HowLongCollection />);

    const eventList = screen.getByRole("list");
    const eventItem = screen.getByText("My Birthday | 2024-02-23");
    expect(eventList).toContainElement(eventItem);
  });

  test("Then the date outputted will include the time until the event happens", () => {
    render(<HowLongCollection />);

    const eventList = screen.getByRole("list");
    const eventItem = screen.getByText(
      "My Birthday | 2024-02-23" | "2 days to go!"
    );
    expect(eventList).toContainElement(eventItem);
  });
});
