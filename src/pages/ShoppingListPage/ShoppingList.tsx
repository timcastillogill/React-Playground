import React from "react";
import ShoppingListCollection from "../../components/ShoppingListComponents/ShoppingListCollection/ShoppingListCollection";
import "./ShoppingList.css";

const ShoppingListPage = () => {
  return (
    <section className="shoppingListSection">
      <ShoppingListCollection />
    </section>
  );
};

export default ShoppingListPage;
