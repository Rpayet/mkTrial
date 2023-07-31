import React, { createContext, useEffect, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {

  {/** Event Data Manager */}
  const [eventData, setEventData] = useState(null);
  const [event, setEvent] = useState(null);
  const [user, setUser] = useState(null);
  const [entries, setEntries] = useState(null);
  const [eventId, setEventId] = useState(null);
  const [data, setData] = useState(null);

  {/** Event Interaction/Animation Manager */}
  const [newEntry, setNewEntry] = useState(null);
    const [isOngoing, setIsOngoing] = useState(true);
    const [animation, setAnimation] = useState({
    firstAnimation: true,
  });
  
  [/** Loading Manager */]
  const [isLoading, setIsLoading] = useState({
    event: false,
    user: false,
    entry: false,
  });
  const [filled, setFilled] = useState(0);
  
  {/** Section Manager */}
  const [ section, setSection ] = useState({
    ranking: true,
    highlight: false,
    editor: false,
    registration: false,
    interruption: false,
  })
  const [registration, setRegistration] = useState({
    unregister: false,
    removeConfirmation: false,
  })

  {/** todo : User State for auth */}
  const isUserRegistered = (user !== null 
    && event.registered.map((registeredUser) => 
      registeredUser.id).includes(user.id));
  
  
  useEffect(() => {
    if (eventData) {
      setEvent(eventData.event);
      setUser(eventData.user);
      setEntries(eventData.entries);
    }
  }, [eventData]);

  const eventContextValue = {
    eventData, setEventData, event, setEvent, user, setUser, entries, setEntries, eventId, setEventId,
    isUserRegistered, isOngoing, setIsOngoing, newEntry, setNewEntry, data, setData,
    isLoading, setIsLoading, animation, setAnimation, filled, setFilled,
    section, setSection, registration, setRegistration,
  };

  return (
    <EventContext.Provider value={eventContextValue}>
      {children}
    </EventContext.Provider>
  );
};
