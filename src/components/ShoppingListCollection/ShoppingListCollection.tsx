import React, { useState } from "react";

const ShoppingListCollection = () => {
  const [shoppingList, setShoppingList] = useState<string[]>(["tomatoes"]);

  const handleNewItem = (newItem: string) => {
    setShoppingList([...shoppingList].push(newItem));
  };

  const listShoppingItems = () => {
    return shoppingList.map((item) => <li>{item}</li>);
  };

  return <ul>{listShoppingItems()}</ul>;
};

export default ShoppingListCollection;
