import React, { useState } from "react";
import UserEntry from "./UserEntry";

export default function UsersEntries({ user, event, rankList, setShowUser, setSection }) {

    const [hoveredEntryKey, setHoveredEntryKey] = useState(null);

    return (
        <>
            {rankList.map((entry, i) => (
                <UserEntry 
                    key= { i }
                    rank= { i }
                    user= { user }
                    event= { event }
                    entry= { entry } 
                    hoveredEntryKey= { hoveredEntryKey }
                    setHoveredEntryKey= { setHoveredEntryKey }
                    setShowUser= { setShowUser } 
                    setSection= { setSection } />
            ))}
        </>
    )
}