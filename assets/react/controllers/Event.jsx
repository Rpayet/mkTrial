import React, { useEffect, useState} from "react";
import axios from "axios";
import OnGoing from "./Event-Comp/Wrappers/OnGoing";
import Finished from "./Event-Comp/Wrappers/Finished";

export default function EventPage({ eventId }) {

    const date = new Date();

    const [eventData, setEventData] = useState(null);
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

    console.log(eventData)

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
