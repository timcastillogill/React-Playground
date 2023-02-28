import React, { ChangeEvent, useState } from "react";

interface Props {
  addShoppingListItem: AddShoppingListItem;
}

const ShoppingListInput: React.FC<Props> = ({ addShoppingListItem }) => {
  const [item, setItem] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let inputValue = (event.target as HTMLInputElement).value;
    inputValue && setItem(inputValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addShoppingListItem(item);
    setItem("");
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
