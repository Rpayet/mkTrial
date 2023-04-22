import React from "react";
import RankOptions from "./RankOptions";
import AddEntry from "./AddEntry";

export default function RankSection({ event, user, entries, isUserRegistered }) {

    return (
        <div 
            id="rank-container"
            className="w-2/3 flex flex-col items-center">
                
                <RankOptions
                        event= { event }
                        entries= { entries }
                        isUserRegistered= { isUserRegistered } />

                { isUserRegistered && 
                    <AddEntry 
                        user= { user }
                        entries= { entries } /> }
        </div>

    )
}