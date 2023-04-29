import React, { useState } from "react";
import UserEntry from "./UserEntry";

export default function UsersEntries({ user, event, sortedEntries, setShowUser, setSection }) {

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
                    setShowUser= { setShowUser } 
                    setSection= { setSection } />
            ))}

        </>
    )
}