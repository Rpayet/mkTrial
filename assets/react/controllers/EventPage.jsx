import React from "react";

export default function EventPage({ event }) {

    console.log(event);
    
    return (
        <div>
            <h1>Prout</h1>
            <p>{`${event.name}`}</p>
        </div>
    )
}