import React, { useEffect, useState} from "react";
import OnGoing from "./Event-Comp/Wrappers/OnGoing";
import Finished from "./Event-Comp/Wrappers/Finished";

export default function EventPage({ event, user, entries }) {

    const date = new Date();
    const eventEndAt = new Date(event.endAt);

    const [isOngoing, setIsOngoing] = useState(false);

    {/* Vérifie si la date est dépassé en temps réel */}
    useEffect(() => {
        if (eventEndAt > date) {
            setIsOngoing(true);
        } else {
            setIsOngoing(false);
        }
    }, [eventEndAt, date]);

    return (
        <>
            {isOngoing ? (
                <OnGoing user={user} event={event} entries={entries} />
            ) : (
                <Finished event={event} entries={entries} />
            )}
        </>
    );
}