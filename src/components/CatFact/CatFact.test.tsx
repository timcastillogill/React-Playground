import { fireEvent, getByText, render, screen } from "@testing-library/react";
import React from "react";
import CatFact from "./CatFact"

jest.mock("./CatFact")
const mockCatFacts = jest.mocked<typeof CatFact>(CatFact)

const FACT_FROM_SERVICE = "This is a cat fact";
mockCatFacts.mockReturnValueOnce(FACT_FROM_SERVICE);

describe("When the home page is rendered", () => {
    test("load a div with a 'h2' tag inside that will render cat facts", () => {
        render(<CatFact />);
        jest.fn().mockImplementationOnce(() => FACT_FROM_SERVICE);
        const fact = screen.getByRole("heading", { level: 2 });

        expect(fact).getByText(FACT_FROM_SERVICE);
    });

    test("load button to refresh the cat fact", () => {
        render(<CatFact />);

        const catFactText = screen.getByRole('button', {
            name: /get me a cat fact/i
        })
        expect(catFactText).toBeInTheDocument();
    });
});

// import { catFacts } from "path/of/my/cat-fact-service"

// jest.mock("path/of/my/cat-fact-service")
// const mockCatFacts = jest.mocked<catFacts>(catFacts)

// const FACT_FROM_SERVICE = "my very specific and expected fact"
// mockCatFacts.mockReturnValueOnce(FACT_FROM_SERVICE)

// desc...
//    test...
//      expect(getByText(FACT_FROM_SERVICE))
