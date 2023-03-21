import React, { useState } from "react";
import HowLongInput from "../HowLongInput/HowLongInput";

const HowLongCollection = () => {
  const [events, setEvents] = useState([
    { id: 1, eventName: "My Birthday", date: "2023-02-23" },
  ]);

  const handleNewEvent = (eventName: string, eventDate: string) => {
    setEvents([
      ...events,
      {
        id: Math.floor(Math.random() * 1000),
        eventName: eventName,
        date: eventDate,
      },
    ]);
  };

  return (
    <section>
      <HowLongInput addEvent={handleNewEvent} />
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.eventName} | {event.date}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HowLongCollection;
