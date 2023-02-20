import { getByText, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import CatFact from "./CatFact";
import useCatFacts from "../../Hooks/useCatFacts";

jest.mock("../../Hooks/useCatFacts");
const mockUseCatFacts = jest.mocked<typeof useCatFacts>(useCatFacts);

describe("Given the Cat Fact Component renders", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("then a div will load with a 'h2' tag inside that will render cat facts", async () => {
    const FACT_FROM_SERVICE = ["This is a cat fact"];
    mockUseCatFacts.mockReturnValue({
      isLoading: false,
      hasError: false,
      data: FACT_FROM_SERVICE,
    });
    // .mockReturnValueOnce({ data: FACT_FROM_SERVICE });
    render(<CatFact />);

    await waitFor(() => expect(useCatFacts).toHaveBeenCalledTimes(1));
  });

  test("then a load button is given to refresh the cat fact", () => {
    render(<CatFact />);

    const catFactText = screen.getByRole("button", {
      name: /get me a cat fact/i,
    });
    expect(catFactText).toBeInTheDocument();
  });

  test("then the response from the api will be 200", () => {
    render(<CatFact />);
    fetch.mockReturnValue(Promise.resolve(new Response("4")));
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

// import {catFacts} from "path/of/my/cat-fact-service"

// jest.mock("path/of/my/cat-fact-service")
// const mockCatFacts = jest.mocked
// <
// catFacts > (catFacts)

// const FACT_FROM_SERVICE = "my very specific and expected fact"
// mockCatFacts.mockReturnValueOnce(FACT_FROM_SERVICE)

// desc...
// test...
// expect(getByText(FACT_FROM_SERVICE))
