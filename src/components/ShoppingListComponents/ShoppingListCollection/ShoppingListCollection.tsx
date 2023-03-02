import React, { useState } from "react";
import ShoppingListInput from "../ShoppingListInput/ShoppingListInput";
import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";

const ShoppingListCollection = () => {
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([
    { id: 1, text: "tomatoes", complete: false },
    { id: 2, text: "onions", complete: true },
  ]);

  const handleNewItem = (newItemText: string) => {
    for (const shoppingItem of shoppingList) {
      if (newItemText === shoppingItem.text) {
        return inputError(newItemText);
      }
    }
    setShoppingList([
      ...shoppingList,
      {
        id: Math.floor(Math.random() * 1000),
        text: newItemText,
        complete: false,
      },
    ]);
    return false;
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

  const inputError = (newItemText: string) => {
    return <p>Duplicate found! You don't need 2 {newItemText}</p>;
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
      <ShoppingListInput
        addShoppingListItem={handleNewItem}
        errorCheck={inputError}
      />
    </>
  );
};

export default ShoppingListCollection;
