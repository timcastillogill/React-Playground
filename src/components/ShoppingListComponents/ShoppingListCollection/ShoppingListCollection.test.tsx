import React from "react";
import ShoppingListCollection from "./ShoppingListCollection";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given the user has added text to the input", () => {
  test("when there are no items in the shopping list an message will show", () => {
    render(<ShoppingListCollection />);
    userEvent.click(
      screen.getByRole("button", { name: /clear shopping list/i })
    );
    const emptyShoppingListMessage = screen.getByText(/no items in the list/i);
    expect(emptyShoppingListMessage).toBeInTheDocument();
  });

  test("then the user can clear the list with an onscreen button", () => {
    render(<ShoppingListCollection />);

    const clearListButton = screen.getByRole("button", {
      name: /clear shopping list/i,
    });
    userEvent.click(clearListButton);
    const nothingInListMessage = screen.getByText(/no items in the list/i);

    expect(nothingInListMessage).toBeInTheDocument();
  });
});
