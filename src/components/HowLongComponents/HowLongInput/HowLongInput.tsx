import moment from "moment";
import React, { ChangeEvent, useState } from "react";

type howLongInputProps = {
  addEvent: AddEvent;
};

const HowLongInput = ({ addEvent }: howLongInputProps) => {
  const [dateOfEvent, setDateOfEvent] = useState("");
  const [nameOfEvent, setNameOfEvent] = useState("");

  let today = new Date().toISOString();
  let todayFormatted = moment(today).format("YYYY-MM-D");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addEvent(dateOfEvent, nameOfEvent);
    setDateOfEvent("");
    setNameOfEvent("");
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let dateValue = (event.target as HTMLInputElement).value;
    dateValue && setDateOfEvent(dateValue);
  };

  const handleEventNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let eventNameValue = (event.target as HTMLInputElement).value;
    eventNameValue && setNameOfEvent(eventNameValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="eventName"
          name="event-name"
          placeholder="Name of your event"
          value={nameOfEvent}
          onChange={handleEventNameChange}
        />

        <label htmlFor="start">Date of exciting event: </label>
        <input
          type="date"
          id="eventDate"
          name="event-date"
          placeholder={todayFormatted}
          value={dateOfEvent}
          min={todayFormatted}
          data-testid="eventDate"
          onChange={handleDateChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HowLongInput;
