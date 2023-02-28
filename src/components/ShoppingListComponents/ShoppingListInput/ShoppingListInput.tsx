import React, { ChangeEvent, FormEventHandler, useState } from "react";

const ShoppingListInput: React.FC = ({ addShoppingListItem }) => {
  const [item, setItem] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let inputValue = (event.target as HTMLInputElement).value;
    inputValue && setItem(inputValue);
  };

  const handleSubmit = (event: FormEventHandler<HTMLFormElement>) => {
    event.preventDefault();
    addShoppingListItem(item);
  };

  return (
    <>
      <h2>Add item:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={item}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Item</button>
      </form>
    </>
  );
};

export default ShoppingListInput;
