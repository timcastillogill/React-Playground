import React from "react";
import addToBasket from "../../../assets/addToBasket.png";
import removeFromBasket from "../../../assets/removeFromBasket.png";
import "./ShoppingListItem.css";

type ShoppingListItemProps = {
  shoppingListItem: ShoppingListItem;
  toggleShoppingListItem: ToggleShoppingListItem;
  increaseQuantity: ChangeQuantityOfItem;
  decreaseQuantity: ChangeQuantityOfItem;
};

const ShoppingListItem = ({
  shoppingListItem,
  toggleShoppingListItem,
  increaseQuantity,
  decreaseQuantity,
}: ShoppingListItemProps) => {
  return (
    <li className="addedShoppingItem">
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
      <div className="shoppingBasketControls">
        <button
          test-id="increaseQuantityButton"
          className="basket"
          type="button"
          name="increaseQuantity"
          onClick={() => {
            increaseQuantity(shoppingListItem);
          }}
        >
          <img className="basketIcon" src={addToBasket} alt="basketIcon" />
        </button>
        <button
          test-id="decreaseQuantityButton"
          className="basket"
          type="button"
          name="decreaseQuantity"
          onClick={() => {
            decreaseQuantity(shoppingListItem);
          }}
        >
          <img className="basketIcon" src={removeFromBasket} alt="basketIcon" />
        </button>
      </div>
    </li>
  );
};
export default ShoppingListItem;
