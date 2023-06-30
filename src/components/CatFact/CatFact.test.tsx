import { render, screen } from "@testing-library/react";
import React from "react";
import CatFact from "./CatFact";
import useCatFacts from "../../Hooks/useCatFacts";
import { renderWithUseEffect } from "../../testing/helpers";

jest.mock("../../Hooks/useCatFacts");
const mockUseCatFacts = jest.mocked<typeof useCatFacts>(useCatFacts);

describe("Given the Cat Fact Component renders with no error", () => {
  beforeEach(() => {
    const FACT_FROM_SERVICE = ["This is a cat fact"];
    mockUseCatFacts.mockReturnValue({
      isLoading: false,
      hasError: false,
      data: FACT_FROM_SERVICE,
    });
    jest.clearAllMocks();
  });

  test("then a div will load with a 'h2' tag inside that will render cat facts", async () => {
    renderWithUseEffect(<CatFact />);
    const catFactText = screen.getByTestId("catFactHeading");

    expect(catFactText).toBeInTheDocument();
  });

  test("then a load button is given to refresh the cat fact", () => {
    renderWithUseEffect(<CatFact />);
    const catFactText = screen.getByRole("button", {
      name: /get me a cat fact/i,
    });
    expect(catFactText).toBeInTheDocument();
  });
});

describe("Given the Cat Fact component renders WITH error", () => {
  beforeEach(() => {
    mockUseCatFacts.mockReturnValue({
      isLoading: false,
      hasError: true,
      data: [""],
    });
    jest.clearAllMocks();
  });

  test("text will read error message", () => {
    renderWithUseEffect(<CatFact />);
    const errorMessage = screen.getByTestId("errorMessage");
    expect(errorMessage).toBeInTheDocument();
  });
});
