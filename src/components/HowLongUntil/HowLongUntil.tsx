import React, { ChangeEvent, Fragment, useState } from "react";

const HowLongUntil = () => {
  const [occasionName, setOccasionName] = useState("");
  const [occasion, setOccasion] = useState<OccasionDetails[]>([
    {} as OccasionDetails,
  ]);

  const handleOccasionChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setOccasionName(event.target.value);
  };

  const handleEventSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOccasion([
      ...occasion,
      {
        id: Math.floor(Math.random() * 1000),
        occasionName:
          occasionName.charAt(0).toUpperCase() + occasionName.slice(1),
      },
    ]);
    setOccasionName("");
  };

  return (
    <Fragment>
      <form onSubmit={handleEventSubmit}>
        <input
          type="text"
          onChange={handleOccasionChange}
          value={occasionName}
        />
        <button>Add Event</button>
      </form>
      {occasion.length > 0 && (
        <ul>
          {occasion.slice(1).map((occasionItem) => (
            <li key={occasionItem.id}>{occasionItem.occasionName}</li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default HowLongUntil;
