import React from "react";
import RaceInfo from "./RaceInfo";

export default function SubmissionCard({ event }) {

    return (
        
        <div className="w-1/3 text-center">

            <h2 className="text-2xl text-silver font-bold">{`${event.name}`}</h2>

            <div 
                id="event-container"
                className="w-full">

                <RaceInfo event= {event} />

            </div>

        </div>

    )
}