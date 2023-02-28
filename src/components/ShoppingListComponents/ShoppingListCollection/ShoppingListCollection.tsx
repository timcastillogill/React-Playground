import React, { useState } from "react";
import ShoppingListInput from "../ShoppingListInput/ShoppingListInput";
import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";

const ShoppingListCollection = () => {
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([
    { text: "tomatoes", complete: false },
    { text: "onions", complete: true },
  ]);

  const handleNewItem = (newItemText: string, complete: boolean) => {
    setShoppingList([
      ...shoppingList,
      { text: newItemText, complete: complete },
    ]);
  };

  const listShoppingItems = () => {
    return shoppingList.map((item) => {
      <ul>
        <ShoppingListItem
          key={item.text}
          shoppingListItem={item}
          toggleShoppingListItem={toggleShoppingListItem}
        />
      </ul>;
    });
  };

  const toggleShoppingListItem = (
    selectedShoppingListItem: ShoppingListItem
  ) => {
    const newShoppingList = shoppingList.map((item) => {
      if (item === selectedShoppingListItem) {
        return {
          ...item,
          complete: !item.complete,
        };
      }
      return item;
    });
    setShoppingList(newShoppingList);
  };

  return (
    <>
      <ul>{listShoppingItems()}</ul>
      <ShoppingListInput addShoppingListItem={handleNewItem} />
    </>
  );
};

export default ShoppingListCollection;
