import React, { useEffect, useState, useContext} from "react";
import axios from "axios";
import OnGoing from "../Wrappers/OnGoing";
import Finished from "../Wrappers/Finished";
import { EventContext } from "../../_Provider/EventContext";

export default function Main({ eventId }) {

    const date = new Date();

    const { eventData, setEventData } = useContext(EventContext);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOngoing, setIsOngoing] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`/api/event/${eventId}`);
            setEventData(response.data);
            setIsLoading(false);
          } catch (error) {
            setError(error.message);
            setIsLoading(false);
          }
        };
    
        fetchData();
    }, [eventId]);

    useEffect(() => {
        if (eventData && eventData.event && eventData.event.endAt) {
            const eventEndAt = new Date(eventData.event.endAt);
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

    if (error) {
        return <div>Error: {error}</div>;
    }

    const { event, user, entries } = eventData; 

    return (
        <div className="">
            {event && entries ? (
                isOngoing ? (
                    <OnGoing 
                        user={user}
                        event={event}
                        entries={entries}
                        setEventData= { setEventData } />
                ) : (
                    <Finished event={event} entries={entries} />
                )
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
}
