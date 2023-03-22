import React, { useState } from "react";
import HowLongInput from "../HowLongInput/HowLongInput";

const HowLongCollection = () => {
  const [events, setEvents] = useState<EventDetails[]>([
    { id: 1, eventName: "My Birthday", eventDate: "2024-02-23" },
  ]);

  const handleNewEvent = (eventName: string, eventDate: string) => {
    if (eventName === "" || eventDate === "") {
      throw new Error("Input Event name and Event Date");
    }
    setEvents([
      ...events,
      {
        id: Math.floor(Math.random() * 1000),
        eventName: eventName,
        eventDate: eventDate,
      },
    ]);
    return false;
  };

  return (
    <section>
      <HowLongInput addEvent={handleNewEvent} />
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.eventName} | {event.eventDate}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HowLongCollection;
