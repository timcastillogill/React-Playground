import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import HowLong from "./HowLong";

describe("Given the initial render of the How Long Component", () => {
  test("then the component will contain a date input element", () => {
    render(<HowLong />);

    const dateInput = screen.getByTestId("eventDate");

    expect(dateInput).toBeInTheDocument();
  });

  test("then the component will contain an event name input element", () => {
    render(<HowLong />);
    const eventNameInput = screen.getByRole("textbox");

    expect(eventNameInput).toBeInTheDocument();
  });
});

describe("Given the user has submitted an event", () => {
  test("then the event name and date will clear on submit", () => {
    render(<HowLong />);

    const eventNameInput = screen.getByRole("textbox");
    fireEvent.change(eventNameInput, { target: { value: "My Birthday" } });

    const dateInput = screen.getByTestId("eventDate");
    fireEvent.change(dateInput, { target: { value: "2024-02-23" } });

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    expect(eventNameInput.value).toBe("");
    expect(dateInput.value).toBe("");
  });
});
