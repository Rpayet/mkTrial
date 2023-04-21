import React, { useState } from "react";
import EventInfo from "./Event-Comp/Info/EventInfo";
import Userinfo from "./Event-Comp/Info/UsersInfo";
import Ranking from "./Event-Comp/Rank/RankSection";
import Register from "./Event-Comp/Info/Register";

export default function EventPage({ event, user }) {

    const [registration, setRegistration] = useState(false);
    
    return (
        <div>

            <div className="w-full flex gap-4 p-4">

                <div 
                    className="w-1/3 h-fit bg-white rounded-xl flex flex-col gap-4 p-4">

                    <EventInfo event= {event} />
                    <Userinfo 
                        event= { event }
                        user= { user }
                        setRegistration= {setRegistration} /> 

                </div>

                { !registration 
                    ?<Ranking event= { event } />
                    :<Register 
                        event= { event }
                        setRegistration= {setRegistration} />
                }

            </div>

        </div>

    )
}