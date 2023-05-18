import React, { useState } from "react";
import OnGoing from "./Event-Comp/Wrappers/OnGoing";
import Finished from "./Event-Comp/Wrappers/Finished";

export default function EventPage({ event, user, entries }) {

    const date = new Date();
    const eventEndAt = new Date(event.endAt);

    if ( eventEndAt > date ) {

        return (
            <OnGoing
                    user= { user }
                    event = { event }
                    entries= { entries } />
        )

    } else {

        return (
            <>
                <Finished 
                    event= { event }
                    entries= { entries } />            
            </>
        )
    }

}