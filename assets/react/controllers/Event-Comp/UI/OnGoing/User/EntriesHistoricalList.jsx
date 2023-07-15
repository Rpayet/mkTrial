import React, { useState } from "react";
import EntryHistoryCard from "./EntryHistoricalCard";

export default function EntriesHistoricalList({ 
    entry, i, setHoveredEntry, hoveredEntry, 
    handleSubmit, userAuth, formatter, filled,
    entryDelete, setEntryDelete
}) {

    const handleMouseLeave = () => {
        setHoveredEntry( {id: null, key: null} );
        setEntryDelete({...entryDelete, visibility: false});
    }

    return (
        <li 
            onMouseEnter={() => setHoveredEntry( {id: entry.id, key: i} )}
            onMouseLeave={handleMouseLeave}
            className="relative bg-white px-1 py-3 rounded-lg overflow-hidden
                    hover:scale-[1.02]">

            <EntryHistoryCard
                i={i}
                entry={entry}
                formatter={formatter}
                hoveredEntry={hoveredEntry}
                userAuth={userAuth}
                entryDelete={entryDelete}
                setEntryDelete={setEntryDelete}
                filled={filled}
                handleSubmit={handleSubmit} />

        </li>
    )
}