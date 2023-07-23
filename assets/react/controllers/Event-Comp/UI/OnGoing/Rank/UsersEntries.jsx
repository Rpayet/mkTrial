import React, { useContext, useState } from "react";
import UserEntry from "./UserEntry";

export default function UsersEntries({ rankList, setShowUser }) {

    const [hoveredEntryKey, setHoveredEntryKey] = useState(null);

    return (
        <>
            {rankList.map((entry, i) => (
                <UserEntry 
                    key= { i }
                    rank= { i }
                    entry= { entry } 
                    hoveredEntryKey= { hoveredEntryKey }
                    setHoveredEntryKey= { setHoveredEntryKey }
                    setShowUser= { setShowUser } />
            ))}
        </>
    )
}