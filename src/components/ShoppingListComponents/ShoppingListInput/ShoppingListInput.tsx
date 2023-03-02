import React, { ChangeEvent, useState } from "react";
import "./ShoppingListInput.css";

interface Props {
  addShoppingListItem: AddShoppingListItem;
  errorCheck: InputErrorCheck;
}

const ShoppingListInput: React.FC<Props> = ({
  addShoppingListItem,
  errorCheck,
}) => {
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
    <div className="addItem">
      <h2>Add item:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={item}
          onChange={handleChange}
          required
        />
        <p>{errorCheck}</p>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ShoppingListInput;
