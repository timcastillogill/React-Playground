import React, { useState } from "react";
import ShoppingListInput from "../ShoppingListInput/ShoppingListInput";
import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";

const ShoppingListCollection = () => {
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([
    { id: 1, text: "tomatoes", complete: false },
    { id: 2, text: "onions", complete: true },
  ]);

  const checkForDuplicateShoppingItem = (newShoppingItem: string) => {
    for (const shoppingItem of shoppingList) {
      if (newShoppingItem === shoppingItem.text) {
        return true;
      }
    }
    return false;
  };

  const handleNewItem = (newItemText: string) => {
    if (checkForDuplicateShoppingItem(newItemText)) {
      return window.alert("This item is already in your list!");
    }
    setShoppingList([
      ...shoppingList,
      {
        id: Math.floor(Math.random() * 1000),
        text: newItemText,
        complete: false,
      },
    ]);
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

  const clearShoppingList = () => {
    setShoppingList([]);
  };

  return (
    <>
      {shoppingList.length < 1 ? (
        <p>No Items in the list</p>
      ) : (
        <div>
          <ul>
            {shoppingList.map((item) => (
              <ShoppingListItem
                key={item.id}
                shoppingListItem={item}
                toggleShoppingListItem={toggleShoppingListItem}
              />
            ))}
          </ul>
        </div>
      )}
      <button onClick={clearShoppingList}>Clear Shopping List</button>
      <ShoppingListInput addShoppingListItem={handleNewItem} />
    </>
  );
};

export default ShoppingListCollection;
