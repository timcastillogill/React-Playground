import React from "react";
import HowLongCollection from "./HowLongCollection";
import { render, screen } from "@testing-library/react";
import HowLongInput from "../HowLongInput/HowLongInput";

jest.mock("../HowLongInput/HowLongInput");
const mockEventInput = jest.mocked<typeof HowLongInput>(HowLongInput);

describe("Given the user has inputted an event into the input", () => {
  beforeEach(() => {
    const inputtedEventName = "My Birthday";
    const inputtedEventDate = "2024-02-23";
    mockEventInput.mockReturnValue(inputtedEventName);
    jest.clearAllMocks();
  });

  test("Then the user will see a list of event NAMES", () => {
    render(<HowLongCollection />);

    const eventList = screen.getByRole("list");
    expect(eventList.firstChild.innerHTML).toBe("My Birthday | 2024-02-23");
  });
});
