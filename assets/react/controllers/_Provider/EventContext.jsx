import React, { createContext, useEffect, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {

  const [eventData, setEventData] = useState(null);
  const [event, setEvent] = useState(null);
  const [user, setUser] = useState(null);
  const [entries, setEntries] = useState(null);
  
  useEffect(() => {
    if (eventData) {
     setEvent(eventData.event);
      setUser(eventData.user);
      setEntries(eventData.entries);
    }
  }, [eventData]);

  const [eventId, setEventId] = useState(null);

  const [newEntry, setNewEntry] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [animation, setAnimation] = useState({
    firstAnimation: true,
  });

  return (
    <EventContext.Provider value={{ 
      eventData, setEventData, event, user, entries,
      eventId, setEventId, 
      newEntry, setNewEntry, animation, setAnimation,
      data, setData,
      isLoading, setIsLoading }}>
      {children}
    </EventContext.Provider>
  );
};

