import React from "react";
import { render, screen } from "@testing-library/react";
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
});
