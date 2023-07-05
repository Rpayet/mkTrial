import React, { useState } from "react";
import EntryHistoryCard from "./EntryHistoricalCard";
import EntryHistoricalDeletion from "./EntryHistoricalDeletion";

export default function EntriesHistoricalList({ 
    entry, i, setHoveredEntry, hoveredEntry, 
    handleSubmit, userAuth, formatter, filled
}) {

    const [visibility, setVisibility] = useState(true);

    return (
        <li 
            onMouseEnter={() => setHoveredEntry( {id: entry.id, key: i} )}
            onMouseLeave={() => setHoveredEntry( {id: null, key: null} )}
            className="relative bg-white px-1 py-3 rounded-lg 
                    hover:scale-[1.02]">

                {visibility 
                    ? <EntryHistoryCard
                        i={i}
                        entry={entry}
                        formatter={formatter}
                        hoveredEntry={hoveredEntry}
                        userAuth={userAuth}
                        setVisibility={setVisibility} />

                    : <EntryHistoricalDeletion
                        filled={filled}
                        setVisibility={setVisibility}
                        handleSubmit={handleSubmit}
                        hoveredEntry={hoveredEntry} />
                }
            

        </li>
    )
}