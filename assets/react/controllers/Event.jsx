import React, { useContext } from "react";
import Main from "./Event-Comp/Wrappers/Main";
import { EventProvider } from "../controllers/_Provider/EventContext";

export default function EventPage({ id }) {

  return (
    <EventProvider>
      <Main id={ id } />
    </EventProvider>
  );
}
