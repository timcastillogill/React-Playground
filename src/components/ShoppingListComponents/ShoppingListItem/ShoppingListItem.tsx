import React from "react";
import addToBasket from "../../../assets/addToBasket.png";

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
      <button
        test-id="increaseQuantityButton"
        className="addToBasketButtonWrapper"
        type="button"
        name="increaseQuantity"
        onClick={() => {
          increaseQuantity(shoppingListItem);
        }}
      >
        <img className="addToBasketIcon" src={addToBasket} alt="basketIcon" />
      </button>
    </li>
  );
};
export default ShoppingListItem;
