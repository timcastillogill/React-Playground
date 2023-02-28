import React, { useState } from "react";
import ShoppingListInput from "../ShoppingListInput/ShoppingListInput";
import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";

const ShoppingListCollection = () => {
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([
    { text: "tomatoes", complete: false },
    { text: "onions", complete: true },
  ]);

  const handleNewItem = (newItemText: string) => {
    setShoppingList([...shoppingList, { text: newItemText, complete: false }]);
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

  const itemsInShoppingList = () => {
    if (shoppingList.length < 1) {
      return <p>No Items in the list</p>;
    } else {
      <div>
        <ul>
          {shoppingList.map((item) => (
            <ShoppingListItem
              key={item.text}
              shoppingListItem={item}
              toggleShoppingListItem={toggleShoppingListItem}
            />
          ))}
        </ul>
      </div>;
    }
  };

  return (
    <>
      {itemsInShoppingList()}
      <button onClick={clearShoppingList}>Clear Shopping List</button>
      <ShoppingListInput addShoppingListItem={handleNewItem} />
    </>
  );
};

export default ShoppingListCollection;
