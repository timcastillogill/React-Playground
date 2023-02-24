import React, { ChangeEvent, ChangeEventHandler, useState } from "react";

const ShoppingListInput = () => {
  const [item, setItem] = useState("");

  const handleChange = (event: InputEvent) => {
    event.preventDefault();
    let inputValue = event.target.value;
    inputValue && setItem(inputValue);
  };

  const handleSubmit = (event: InputEvent) => {};

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
