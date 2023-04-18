import React from "react";
import RaceInfo from "./RaceInfo";
import OptionInfo from "./OptionInfo";

export default function SubmissionCard({ event }) {

    return (

        <div className="w-full text-center">

            <div className="flex items-center justify-between px-4">
                <h2 className="text-sm text-silver font-bold">{`${event.name}`}</h2>
                <OptionInfo event= {event} />
            </div>

            <div 
                id="event-container"
                className="w-full">

                <RaceInfo event= {event} />

            </div>

        </div>

    )
}