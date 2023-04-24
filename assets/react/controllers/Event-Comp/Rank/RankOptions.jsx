import React from "react";
import NoEntry from "./NoEntry";
import UserEntry from "./UserEntry";

export default function RankOptions({ user, entries, isUserRegistered }) {

    {/* Récupère les temps les plus bas de chaque utilisateur */}
    const lowestEntries = entries.reduce((accumulator, current) => {
        if (!accumulator[current.user.id] || accumulator[current.user.id].time > current.time) {
            accumulator[current.user.id] = current;
        }
        return accumulator;
    }, {});

    {/* Arrange le tableau par temps croissant */}
    const sortedEntries = Object.values(lowestEntries).sort((a, b) => a.time - b.time);

    return (
        <>
            {sortedEntries.length > 0 
                ? <UserEntry
                    user= { user } 
                    sortedEntries= { sortedEntries } />
                : <NoEntry isUserRegistered={isUserRegistered} />
            }
        </>
    );
}
