import React from "react";
import ShoppingList from "./ShoppingList";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given the user has added text to the input", () => {
  test("then the user can clear the list with an onscreen button", () => {
    render(<ShoppingList />);
    userEvent.click(screen.getByRole("button", { name: /clear/i }));
    const emptyShoppingListMessage = screen.getByText(/no items in the list/i);
    expect(emptyShoppingListMessage).toBeInTheDocument();
  });
});

describe("Given the user has not added anything to their list", () => {
  test("when there are no items in the shopping list a message will show", () => {
    render(<ShoppingList />);
    userEvent.click(screen.getByRole("button", { name: /clear/i }));
    const emptyShoppingListMessage = screen.getByText(/no items in the list/i);
    expect(emptyShoppingListMessage).toBeInTheDocument();
  });
});

describe("Given there are items in the shopping list already", () => {
  test("then the icon for adding and decreasing the quantity will render as a button", () => {
    render(<ShoppingList />);

    const decreaseButton = screen.getAllByRole("button", {
      name: /basketIcon/i,
    })[0];

    const increaseButton = screen.getAllByRole("button", {
      name: /basketIcon/i,
    })[1];

    expect(decreaseButton).toBeInTheDocument();
    expect(increaseButton).toBeInTheDocument();
  });
});
