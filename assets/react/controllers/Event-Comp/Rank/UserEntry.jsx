import React from "react";

export default function UserEntry({ sortedEntries }) {

    {/* Formate le temps stocké dans la BDD au format "m:ss:fsfsfs" */}
    function formatTime(timeInMs) {
        const date = new Date(timeInMs);
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();
        const milliseconds = date.getUTCMilliseconds().toString().padStart(3, "0");
        return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds}`;
    }

    return (
        <>
            {sortedEntries.map((entry, i) => (
                    <div className="w-full mt-2 py-4 px-10 bg-white flex justify-between rounded-lg">
                        <div className="flex w-1/3 gap-2">
                            <p>#<span className="font-bold">{i+1}</span></p>
                            <p>{entry.user.name}</p>
                        </div>
                        <div>
                            <span className="w-1/3">{formatTime(entry.time)}</span>
                        </div>
                    </div> 
                ))}
        </>
    )
}