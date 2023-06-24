import React, { createContext, useState} from "react";

export const idContext = createContext();

export const idProvider = ({ children }) => {
  const [eventId, setEventId] = useState({});

  return (
    <DataContext.Provider value={{ eventId, setEventId }}>
      {children}
    </DataContext.Provider>
  );
};
