import React from "react";

interface Props {
  shoppingListItem: ShoppingListItem;
  toggleShoppingListItem: ToggleShoppingListItem;
  increaseQuantity: IncreaseQuantityOfItem;
}

const ShoppingListItem: React.FC<Props> = ({
  shoppingListItem,
  toggleShoppingListItem,
  increaseQuantity,
}) => {
  return (
    <li>
      <label
        htmlFor=""
        style={{
          textDecoration: shoppingListItem.complete
            ? "line-through"
            : undefined,
        }}
      >
        <input
          type="checkbox"
          checked={shoppingListItem.complete}
          onClick={() => {
            toggleShoppingListItem(shoppingListItem);
          }}
          onChange={() => undefined}
        />{" "}
        {`${shoppingListItem.quantity}x: ${shoppingListItem.text}`}
      </label>
      <input
        test-id="increaseQuantityButton"
        type="button"
        value="+"
        name="increaseQuantity"
        onClick={() => {
          increaseQuantity(shoppingListItem);
        }}
      />
    </li>
  );
};

export default ShoppingListItem;
