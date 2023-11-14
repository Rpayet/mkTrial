import React from "react";
import EventMain from "../UI/Event/EventMain";
import { EventProvider } from "../_Provider/EventContext";

export default function EventPage() {

  return (
    <EventProvider>
      <EventMain />
    </EventProvider>
  );
}
