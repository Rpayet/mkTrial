import React, { useEffect, useState} from "react";
import OnGoing from "./Event-Comp/Wrappers/OnGoing";
import Finished from "./Event-Comp/Wrappers/Finished";

export default function EventPage({ event, user, entries }) {

    const date = new Date();
    const eventEndAt = new Date(event.endAt);

    const [isOngoing, setIsOngoing] = useState(false);

    {/* Vérifie si la date de fin de l'event est dépassé*/}
    useEffect(() => {
        if (eventEndAt > date) {
            setIsOngoing(true);
        } else {
            setIsOngoing(false);
        }
    }, [eventEndAt, date]);

    return (
        <div className="">
            {isOngoing ? (
                <OnGoing user={user} event={event} entries={entries} />
            ) : (
                <Finished event={event} entries={entries} />
            )}
        </div>
    );
}