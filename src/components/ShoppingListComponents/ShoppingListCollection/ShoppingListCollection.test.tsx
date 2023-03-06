import React from "react";
import ShoppingListCollection from "./ShoppingListCollection";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingListInput from "../ShoppingListInput/ShoppingListInput";

describe("Given the user has added text to the input", () => {
  test("then the user can clear the list with an onscreen button", () => {
    render(<ShoppingListCollection />);
    userEvent.click(
      screen.getByRole("button", { name: /clear shopping list/i })
    );
    const emptyShoppingListMessage = screen.getByText(/no items in the list/i);
    expect(emptyShoppingListMessage).toBeInTheDocument();
  });
});

describe("Given the user has not added anything to their list", () => {
  test("when there are no items in the shopping list a message will show", () => {
    render(<ShoppingListCollection />);
    userEvent.click(
      screen.getByRole("button", { name: /clear shopping list/i })
    );
    const emptyShoppingListMessage = screen.getByText(/no items in the list/i);
    expect(emptyShoppingListMessage).toBeInTheDocument();
  });
});

describe("Given the user inputs the same shopping item twice", () => {});
