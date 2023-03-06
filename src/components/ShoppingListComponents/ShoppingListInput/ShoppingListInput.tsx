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
  const [error, setError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let inputValue = (event.target as HTMLInputElement).value;
    inputValue && setItem(inputValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (errorCheck(item)) {
      setError(true);
      setItem("");
    } else {
      addShoppingListItem(item);
      setItem("");
      setError(false);
    }
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
        {error && (
          <div>
            <p>Duplicate! You don't need 2 of those...</p>
            <p>Or maybe you'd like to know the quantity?</p>
            <button>Yes</button>
            <button>No</button>
          </div>
        )}
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ShoppingListInput;
