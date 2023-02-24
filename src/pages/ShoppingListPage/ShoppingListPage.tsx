import React from "react";
import ShoppingListInput from "../../components/ShoppingListInput/ShoppingListInput";
import ShoppingListCollection from "../../components/ShoppingListCollection/ShoppingListCollection";

const ShoppingListPage = () => {
  return (
    <section>
      <ShoppingListInput />
      <ShoppingListCollection />
    </section>
  );
};

export default ShoppingListPage;
