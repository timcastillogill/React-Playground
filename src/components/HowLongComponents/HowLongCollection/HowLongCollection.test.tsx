import React from "react";
import HowLongCollection from "./HowLongCollection";
import { render, screen } from "@testing-library/react";
import HowLongInput from "../HowLongInput/HowLongInput";

jest.mock("../HowLongInput/HowLongInput");
const mockEventInput = jest.mocked<typeof HowLongInput>(HowLongInput);

describe("Given the user has inputted an event into the input", () => {
  beforeEach(() => {
    const inputtedEvent = "My Birthday";
    mockEventInput.mockReturnValue(inputtedEvent);
    jest.clearAllMocks();
  });

  test("Then the user will see a list of event NAMES", () => {
    render(<HowLongCollection />);

    const eventList = screen.getByRole("list");
    expect(eventList.firstChild.innerHTML).toBe("My Birthday");
  });
});
