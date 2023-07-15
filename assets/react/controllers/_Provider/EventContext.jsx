import React, { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {

  const [eventData, setEventData] = useState(null);
  const [newEntry, setNewEntry] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [animation, setAnimation] = useState({
    firstAnimation: true,
  });

  return (
    <EventContext.Provider value={{ 
      eventData, setEventData, 
      newEntry, setNewEntry, animation, setAnimation,
      data, setData,
      isLoading, setIsLoading }}>
      {children}
    </EventContext.Provider>
  );
};

