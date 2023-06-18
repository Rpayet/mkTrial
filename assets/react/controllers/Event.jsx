import React from "react";
import Main from "./Event-Comp/Wrappers/Main";
import { EventProvider } from "../controllers/_Provider/EventContext";

export default function EventPage({eventId}) {
  return (
    <EventProvider>
      <Main eventId={ eventId } />
    </EventProvider>
  );
}
