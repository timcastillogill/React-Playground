import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingListInput from "./ShoppingListInput";
import userEvent from "@testing-library/user-event";

const addShoppingListItem = jest.fn();
const inputErrorCheck = jest.fn();

describe("Given a shopping list input component is rendered", () => {
  test("then the user has an input and submit button to add their items", () => {
    render(
      <ShoppingListInput
        addShoppingListItem={addShoppingListItem}
        errorCheck={inputErrorCheck}
      />
    );

    const inputtedShoppingListItem = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button", { name: /add item/i });
    expect(inputtedShoppingListItem).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  describe("when the user has inputted a duplicate item into the list", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("will render an error message telling the user there is a duplicate and not add to the list", () => {
      inputErrorCheck.mockReturnValue("true");
      render(
        <ShoppingListInput
          addShoppingListItem={addShoppingListItem}
          errorCheck={inputErrorCheck}
        />
      );

      const input = screen.getByRole("textbox");
      expect(input).toBeInTheDocument();
      const addItemButton = screen.getByRole("button", { name: /add item/i });
      expect(addItemButton).toBeInTheDocument();

      fireEvent.change(input, { target: { value: "apple" } });
      userEvent.click(addItemButton);

      fireEvent.change(input, { target: { value: "apple" } });
      userEvent.click(addItemButton);

      const duplicateMessage = screen.getByText(
        /duplicate! you don't need 2 of those\.\.\./i
      );
      expect(duplicateMessage).toBeInTheDocument();
      jest.clearAllMocks();
    });

    test("display buttons to add multiple of the same item", () => {
      inputErrorCheck.mockReturnValue("true");
      render(
        <ShoppingListInput
          addShoppingListItem={addShoppingListItem}
          errorCheck={inputErrorCheck}
        />
      );
      const input = screen.getByRole("textbox");
      expect(input).toBeInTheDocument();
      const addItemButton = screen.getByRole("button", { name: /add item/i });
      expect(addItemButton).toBeInTheDocument();

      fireEvent.change(input, { target: { value: "apple" } });
      userEvent.click(addItemButton);

      fireEvent.change(input, { target: { value: "apple" } });
      userEvent.click(addItemButton);

      const duplicateMessage = screen.getByText(
        /duplicate! you don't need 2 of those\.\.\./i
      );
      expect(duplicateMessage).toBeInTheDocument();

      const quantityQuestion = screen.getByText(
        /or maybe you'd like to add the quantity\?/i
      );
      const quantityQuestionAnswerButtonsYES = screen.getByRole("button", {
        name: /yes/i,
      });
      const quantityQuestionAnswerButtonsNO = screen.getByRole("button", {
        name: /no/i,
      });
      expect(quantityQuestion).toBeInTheDocument();
      expect(quantityQuestionAnswerButtonsYES).toBeInTheDocument();
      expect(quantityQuestionAnswerButtonsNO).toBeInTheDocument();
    });
  });
});
