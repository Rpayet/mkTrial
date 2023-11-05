import React from "react";
import EventMain from "./Event-Comp/Wrappers/EventMain";
import { EventProvider } from "../controllers/_Provider/EventContext";

export default function EventPage() {

  return (
    <EventProvider>
      <EventMain />
    </EventProvider>
  );
}
