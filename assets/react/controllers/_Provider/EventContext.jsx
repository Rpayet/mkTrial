import React, { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [eventData, setEventData] = useState(null);

  return (
    <EventContext.Provider value={{ eventData, setEventData }}>
      {children}
    </EventContext.Provider>
  );
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
