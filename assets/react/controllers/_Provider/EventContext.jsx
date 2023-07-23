import React, { createContext, useEffect, useState } from "react";
import { createDateTimeObject } from '../Event-Comp/_Services/FormatTime'

export const EventContext = createContext();

export const EventProvider = ({ children }) => {

  const [eventData, setEventData] = useState(null);
  const [event, setEvent] = useState(null);
  const [user, setUser] = useState(null);
  const [entries, setEntries] = useState(null);
  const [eventId, setEventId] = useState(null);

  const [newEntry, setNewEntry] = useState(null);
  const [data, setData] = useState(null);

  const [countdown, setCountdown] = useState(null);

  const [isLoading, setIsLoading] = useState({
    event: false,
    user: false,
    entry: false,
  });
  const [filled, setFilled] = useState(0);

  const [animation, setAnimation] = useState({
    firstAnimation: true,
  });

  const [ section, setSection ] = useState({
    ranking: true,
    highlight: false,
    editor: false,
  })


  const isUserRegistered = user !== null && event.registered.map((registeredUser) => registeredUser.id).includes(user.id);
  
  useEffect(() => {
    if (eventData) {
      setEvent(eventData.event);
      setUser(eventData.user);
      setEntries(eventData.entries);
    }
  }, [eventData]);

  useEffect(() => {
    if (event && event?.endAt && event?.hourEnd) {
        setCountdown(createDateTimeObject(event?.endAt, event?.hourEnd));
    }
  }, [event]);


  const eventContextValue = {
    eventData, setEventData, event, setEvent, user, setUser, entries, setEntries, eventId, setEventId,
    isUserRegistered, countdown, newEntry, setNewEntry, data, setData,
    isLoading, setIsLoading, animation, setAnimation, filled, setFilled,
    section, setSection
  };

  return (
    <EventContext.Provider value={eventContextValue}>
      {children}
    </EventContext.Provider>
  );
};
