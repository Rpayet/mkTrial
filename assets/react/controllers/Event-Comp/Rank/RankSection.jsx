import React from "react";
import Ranking from "./Ranking";
import AddEntry from "./AddEntry";
import NoEntry from "./NoEntry";

export default function RankSection({ event, entries, isUserRegistered }) {

    return (
        <div 
            id="rank-container"
            className="w-2/3 flex flex-col items-center">
                
                {!entries.length == 0 

                    ?<Ranking 
                        event= { event }
                        entries= { entries } />

                    :<NoEntry />
                }

                { isUserRegistered && <AddEntry /> }
        </div>

    )
}