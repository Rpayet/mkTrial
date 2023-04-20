import React, { useState } from "react";
import EventInfo from "./Event-Comp/EventInfo";
import Userinfo from "./Event-Comp/UsersInfo";
import Ranking from "./Event-Comp/Ranking";
import Register from "./Event-Comp/Register";

export default function EventPage({ event }) {

    console.log(event)
    
    return (
        <div>

            <div className="w-full flex gap-4 p-4">

                <div 
                    className="w-1/3 h-fit bg-white rounded-xl flex flex-col gap-4 p-4">

                    <EventInfo event= {event} />

                    <Userinfo event= {event} /> 

                </div>

                {/* <Ranking event= { event } /> */}

                <Register event= {event} />

            </div>

            

        </div>

    )
}