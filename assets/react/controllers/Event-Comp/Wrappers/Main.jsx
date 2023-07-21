import React, { useEffect, useState, useContext } from "react";
import OnGoing from "../Wrappers/OnGoing";
import Finished from "../Wrappers/Finished";
import { EventContext } from "../../_Provider/EventContext";
import { EventService } from "../../_Service/EventService";

export default function Main({ id }) {

    const date = new Date();

    const { eventData, setEventData, eventId, 
        setEventId, event, entries } = useContext(EventContext);
   
    useEffect(() => {
        setEventId(id);
    }, [id]);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOngoing, setIsOngoing] = useState(true);
    
    useEffect(() => {
        if (eventId) {
            const fetchData = async () => {
                try {
                  await EventService().getEvent(eventId, setEventData);
                  setIsLoading(false);
                } catch (error) {
                  setError(error.message);
                  setIsLoading(false);
                }
              };
              fetchData();
            }
    }, [eventId]);

    useEffect(() => {
        if (eventData && eventData?.event && eventData?.event.endAt) {
            const eventEndAt = new Date(eventData?.event.endAt);
            setIsOngoing(eventEndAt > date);
        }
      }, [eventData, date]);

    if (isLoading) {
        return (
            <div>
                <img 
                    className="m-auto mt-24 w-44"
                    src="/assets/admin/img/gif/Lakitu---Loading.gif" 
                    alt="Loading" />
            </div>
        )
    }

    if (error) { return (<div>Error: {error}</div>)}
    
    return (
        <>
            {(event && entries)
                ? (isOngoing 
                    ? (<OnGoing />) 
                    : (<Finished /> )) 
                : (<div>No data available</div>)}
        </>
    );
}
