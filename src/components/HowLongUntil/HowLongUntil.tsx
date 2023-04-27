import moment from "moment";
import React, { ChangeEvent, Fragment, useState } from "react";
import "./HowLongUntil.css";

const HowLongUntil = () => {
  const [occasionName, setOccasionName] = useState("");
  const [occasionDate, setOccasionDate] = useState("");
  const [occasion, setOccasion] = useState<Occasion[]>([]);

  let today = new Date().toISOString();
  let todayFormatted = moment(today).format("YYYY-MM-D");

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
    let formatDate = occasionDate.replace(/-/g, "");
    setOccasion([
      ...occasion,
      {
        id: Math.floor(Math.random() * 1000),
        occasionName:
          occasionName.charAt(0).toUpperCase() + occasionName.slice(1),
        occasionDate: occasionDate,
        timeUntil: moment(
          (parseInt(formatDate) + 1).toString(),
          "YYYYMMDD"
        ).fromNow(),
      },
    ]);

    setOccasionName("");
    setOccasionDate("");
  };

  return (
    <Fragment>
      <form onSubmit={handleEventSubmit}>
        <input
          type="text"
          className="occasionName"
          onChange={handleOccasionChange}
          value={occasionName}
        />
        <input
          type="date"
          aria-label="occasionDate"
          value={occasionDate}
          onChange={handleDateChange}
          min={todayFormatted}
          placeholder={todayFormatted}
        />
        <button className="ui-button">Add Occasion</button>
      </form>
      {occasion.length > 0 && (
        <>
          <br />
          <hr />
          <table className="occasionTable">
            <tbody>
              <tr>
                <th>Occasion Name</th>
                <th>Occasion Date</th>
                <th>How Long Until</th>
              </tr>
              {occasion.map((occasionItem) => (
                <tr key={occasionItem?.id}>
                  <td>{occasionItem?.occasionName}</td>
                  <td aria-label="dateColumn">{occasionItem?.occasionDate}</td>
                  <td aria-label="timeUntil">{occasionItem?.timeUntil}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </Fragment>
  );
};

export default HowLongUntil;
