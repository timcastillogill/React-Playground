import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HowLongUntil from "./HowLongUntil";

describe("HowLongUntil", () => {
  describe("Given the user has typed 'Hello World' and hit a button", () => {
    test("Then it will display 'Hello World!'", () => {
      render(<HowLongUntil />);

      userEvent.type(screen.getByRole("textbox"), "Hello World!");
      userEvent.click(screen.getByRole("button"));
      expect(screen.getByText("Hello World!")).toBeInTheDocument();
    });
  });
  describe("Given the user has typed 'Laurence's Birthday' and hit a button", () => {
    test("Then it will display 'Laurence's Birthday'", () => {
      render(<HowLongUntil />);

      userEvent.type(screen.getByRole("textbox"), "Laurence's Birthday");
      userEvent.click(screen.getByRole("button"));
      expect(screen.getByText("Laurence's Birthday")).toBeInTheDocument();
    });
  });

  describe("Given the user had typed 'Tim's Birthday' and hit a button", () => {
    test("Then it will display 'Tim's Birthday'", () => {
      render(<HowLongUntil />);

      userEvent.type(screen.getByRole("textbox"), "Tim's Birthday");
      userEvent.click(screen.getByRole("button"));
      expect(screen.getByText("Tim's Birthday")).toBeInTheDocument();
    });
  });
});
