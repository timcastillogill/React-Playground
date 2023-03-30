import React, { ChangeEvent, Fragment, useState } from "react";

const HowLongUntil = () => {
  const [occasionName, setOccasionName] = useState("");
  const [occasionDate, setOccasionDate] = useState("");
  const [occasion, setOccasion] = useState<OccasionDetails[]>([
    {} as OccasionDetails,
  ]);

  const handleOccasionChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setOccasionName(event.target.value);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setOccasionDate(event.target.value);
  };

  const handleEventSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOccasion([
      ...occasion,
      {
        id: Math.floor(Math.random() * 1000),
        occasionName:
          occasionName.charAt(0).toUpperCase() + occasionName.slice(1),
        occasionDate: occasionDate,
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
        <input
          type="date"
          aria-label="occasionDate"
          value={occasionDate}
          onChange={handleDateChange}
        />
        <button>Add Occasion</button>
      </form>
      {occasion.length > 0 && (
        <table>
          <tr>
            <th>Occasion Name</th>
            <th>Occasion Date</th>
          </tr>
          <tbody>
            {occasion.map((occasionItem) => (
              <tr>
                <td>{occasionItem.occasionName}</td>
                <td aria-label="dateColumn">{occasionItem.occasionDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Fragment>
  );
};

export default HowLongUntil;
