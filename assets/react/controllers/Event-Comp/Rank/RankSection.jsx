import React from "react";
import Ranking from "./Ranking";
import AddEntry from "./AddEntry";

export default function RankSection({ event, entries, isUserRegistered }) {

    return (
        <div 
            id="rank-container"
            className="w-2/3 flex flex-col items-center">
                
                <Ranking 
                    event= { event }
                    entries= { entries } />

                { isUserRegistered && <AddEntry /> }
        </div>

    )
}