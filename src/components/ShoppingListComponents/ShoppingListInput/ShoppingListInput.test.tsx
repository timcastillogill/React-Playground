import React from "react";
import { render, screen } from "@testing-library/react";
import ShoppingListInput from "./ShoppingListInput";

const addShoppingListItem = jest.fn();
const inputErrorCheck = jest.fn();

describe("Given a shopping list component is rendered", () => {
  describe("when the user inputs an item and clicks submit", () => {
    test("then the item will be stored and rendered in the list", () => {
      render(
        <ShoppingListInput
          addShoppingListItem={addShoppingListItem}
          errorCheck={inputErrorCheck}
        />
      );

      const inputtedShoppingListItem = screen.getByRole("textbox");
      expect(inputtedShoppingListItem).toBeInTheDocument();
    });
  });
});
