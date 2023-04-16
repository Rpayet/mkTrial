import React from "react";
import EventInfo from "./EventInfo";
import EntryForm from "./EntryForm";

export default function SubmissionCard({ event }) {

    return (

        <div 
            id="event-container"
            className="w-1/3">

            <EventInfo event= {event} />

            <EntryForm />

        </div>

    )
}