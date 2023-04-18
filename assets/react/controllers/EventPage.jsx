import React from "react";
import EventInfo from "./Event-Comp/EventInfo";
import Userinfo from "./Event-Comp/UsersInfo";

export default function EventPage({ event }) {

    return (
        <div>

            <div className="w-full flex gap-4 p-4">

                <div 
                    className="w-1/3 h-fit bg-white rounded-xl flex flex-col gap-4 p-4">

                    <EventInfo event= {event} />

                    <Userinfo event= {event} /> 

                </div>

                <div 
                    id="rank-container"
                    className="w-2/3 flex flex-col items-center">

                        { Array.from({length: 12}).map((_, i) => (
                        <div className="w-full mt-2 py-4 px-2 bg-white flex justify-between rounded-lg">
                            <div className="flex w-1/3 gap-2">
                                <span>#01</span>
                                <p>{event.user.name}</p>
                            </div>
                            <div>
                                <span className="w-1/3">1:22.333</span>
                            </div>
                        </div> 
                        )) }

                </div>

            </div>

            

        </div>

    )
}