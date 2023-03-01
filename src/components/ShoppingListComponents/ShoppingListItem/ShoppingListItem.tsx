import React from "react";

interface Props {
  shoppingListItem: ShoppingListItem;
  toggleShoppingListItem: ToggleShoppingListItem;
}

const ShoppingListItem: React.FC<Props> = ({
  shoppingListItem,
  toggleShoppingListItem,
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
        {shoppingListItem.text}
      </label>
    </li>
  );
};

export default ShoppingListItem;
