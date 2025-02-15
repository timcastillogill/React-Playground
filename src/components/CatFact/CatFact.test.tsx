import { render, screen } from "@testing-library/react";
import React from "react";
import CatFact from "./CatFact";
import useCatFacts from "../../Hooks/useCatFacts";

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

  it("then a div will load with a 'h2' tag inside that will render cat facts", async () => {
    render(<CatFact />);

    const catFactText = screen.getByTestId("catFactHeading");

    expect(catFactText).toBeInTheDocument();
  });

  it("then a load button is given to refresh the cat fact", () => {
    render(<CatFact />);

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

  it("text will read error message", () => {
    render(<CatFact />);

    const errorMessage = screen.getByTestId("errorMessage");
    expect(errorMessage).toBeInTheDocument();
  });
});
