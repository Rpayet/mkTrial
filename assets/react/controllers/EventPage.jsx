import React from "react";
import SubmissionCard from "./Event-Comp/SubmissionCard";

export default function EventPage({ event }) {

    return (
        <div className="w-full">

            <SubmissionCard event= {event} />

            <div 
                id="rank-container"
                className="w-2/3">

            </div>
            
        </div>
    )
}