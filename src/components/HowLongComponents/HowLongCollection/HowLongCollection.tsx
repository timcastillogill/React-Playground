import React, { useState } from "react";
import HowLongInput from "../HowLongInput/HowLongInput";

const HowLongCollection = () => {
  const [events, setEvents] = useState([
    { id: 1, eventName: "My Birthday", date: "2023-02-23" },
  ]);

  return (
    <section>
      <HowLongInput />
      <ul>
        {events.map((event) => (
          <li>
            {event.eventName} | {event.date}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HowLongCollection;
