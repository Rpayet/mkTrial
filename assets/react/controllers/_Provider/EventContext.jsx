import React, { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  
  const [eventData, setEventData] = useState(null);
  const [newEntry, setNewEntry] = useState(null);
  const [data, setData] = useState(null);

  return (
    <EventContext.Provider value={{ 
      eventData, setEventData, 
      newEntry, setNewEntry,
      data, setData }}>
      {children}
    </EventContext.Provider>
  );
};

