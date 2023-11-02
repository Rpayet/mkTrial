import React from "react";
import EventMain from "./Event-Comp/Wrappers/EventMain";
import { EventProvider } from "../controllers/_Provider/EventContext";

export default function EventPage({ id }) {

  return (
    <EventProvider>
      <EventMain id={ id } />
    </EventProvider>
  );
}
