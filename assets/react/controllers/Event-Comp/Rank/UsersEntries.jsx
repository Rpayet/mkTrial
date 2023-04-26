import React, { useState } from "react";
import UserEntry from "./UserEntry";

export default function UsersEntries({ user, event, sortedEntries }) {

    {/* Formate le temps stocké dans la BDD au format "m:ss:fsfsfs" */}
    function formatTime(timeInMs) {
        const date = new Date(timeInMs);
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();
        const milliseconds = date.getUTCMilliseconds().toString().padStart(3, "0");
        return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds}`;
    }

    const [hoveredEntryKey, setHoveredEntryKey] = useState(null);

    return (
        <>
            {sortedEntries.map((entry, i) => (
                <UserEntry 
                    user= { user }
                    event= { event }
                    entry= { entry } 
                    i= { i }
                    hoveredEntryKey= { hoveredEntryKey }
                    setHoveredEntryKey= { setHoveredEntryKey }
                    formatTime= { formatTime } />
            ))}

        </>
    )
}