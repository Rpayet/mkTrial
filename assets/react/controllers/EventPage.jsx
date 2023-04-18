import React from "react";
import EventInfo from "./Event-Comp/EventInfo";
import Userinfo from "./Event-Comp/UsersInfo";

export default function EventPage({ event }) {

    console.log(event);

    return (
        <div className="w-full flex flex-col items-center bg-white rounded-lg p-4">

                <div className="w-full flex justify-around">

                    <Userinfo event= {event} /> 

                    <EventInfo event= {event} />

                    <div 
                        id="event-options"
                        className="w-1/3" >
                            <span>{`${new Date(event.endAt.date).toLocaleDateString()}`}</span>

                    </div>

                </div>
            <div 
                id="rank-container"
                className="w-2/3">

            </div>
            
        </div>
    )
}