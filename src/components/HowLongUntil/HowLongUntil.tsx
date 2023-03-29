import React, { ChangeEvent, Fragment, useState } from "react";

const HowLongUntil = () => {
  const [event, setEvent] = useState("");

  const handleEventChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEvent(event.target.value);
  };

  return (
    <Fragment>
      <input type="text" onChange={handleEventChange} value={event} />
      <button>Add Event</button>
      <p>{event}</p>
    </Fragment>
  );
};

export default HowLongUntil;
