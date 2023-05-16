import React, { useState } from "react";
import LeaderBoard from "./Event-Comp/UI/LearderBoard/LeaderBoard";
import OnGoing from "./Event-Comp/Wrappers/OnGoing";

export default function EventPage({ event, user, entries }) {

    return (
        <>
            <OnGoing
                user= { user }
                event = { event }
                entries= { entries }
 
            />


            {/* <LeaderBoard 
                event= { event }
                entries= { entries } /> */}
                
            

        </>

    )
}