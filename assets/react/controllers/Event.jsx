import React, { useState } from "react";
import OnGoing from "./Event-Comp/Wrappers/OnGoing";
import Finished from "./Event-Comp/Wrappers/Finished";

export default function EventPage({ event, user, entries }) {

    return (
        <>
            {/* <OnGoing
                user= { user }
                event = { event }
                entries= { entries } /> */}

            <Finished 
                event= { event }
                entries= { entries } />
                
        </>

    )
}