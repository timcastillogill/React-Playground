import React, { ChangeEvent, useState } from "react";
import "./ShoppingListInput.css";

type ShoppingListInputProps = {
  addShoppingListItem: AddShoppingListItem;
  duplicateCheck: InputDuplicateCheck;
  additionalItem: AdditionalItem;
};

const ShoppingListInput = ({
  addShoppingListItem,
  duplicateCheck,
  additionalItem,
}: ShoppingListInputProps) => {
  const [item, setItem] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let inputValue = (event.target as HTMLInputElement).value;
    inputValue && setItem(inputValue);
  };

  const handleUpdateToQuantity = () => {
    additionalItem(item);
    setDuplicate(false);
    setItem("");
  };

  const handleNoUpdate = () => {
    setItem("");
    setDuplicate(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (duplicateCheck(item)) {
      setDuplicate(true);
    } else {
      addShoppingListItem(item);
      setItem("");
      setDuplicate(false);
    }
  };

  return (
    <div className="addItem">
      <form onSubmit={handleSubmit}>
        {!duplicate && (
          <input
            type="text"
            placeholder="Item Name"
            value={item}
            onChange={handleChange}
            required
          />
        )}
        {duplicate && (
          <div className="duplicateContainer">
            <p>Duplicate! You don't need 2 of those...</p>
            <hr />
            <p>Or maybe you'd like to add an additional?</p>
            <button className="addMoreButton" onClick={handleUpdateToQuantity}>
              Yes, Gimme more of that
            </button>
            <button className="skipDuplicateButton" onClick={handleNoUpdate}>
              No, I forgot it was already on the list...
            </button>
          </div>
        )}
        {!duplicate && (
          <button className="ui-button addItem" type="submit">
            Add Item
          </button>
        )}
      </form>
    </div>
  );
};

export default ShoppingListInput;
