import React, { useState } from "react";
import EventInfo from "./Event-Comp/Info/EventInfo";
import Userinfo from "./Event-Comp/Info/UsersInfo";
import RankSection from "./Event-Comp/Rank/RankSection";
import Register from "./Event-Comp/Info/Register";
import EntriesHighlight from "./Event-Comp/User/EntriesHighlight";

export default function EventPage({ event, user, entries }) {

    const [registration, setRegistration] = useState(false);
    const isUserRegistered = user !== null && event.registered.map((registeredUser) => registeredUser.id).includes(user.id);

    return (
        <div>

            <div className="w-full sm:flex gap-4 p-4">

                <div 
                    className="sm:w-1/3 sm:h-fit bg-white rounded-xl flex sm:flex-col gap-4 p-4">

                    <EventInfo event= { event } />

                    <Userinfo
                        user= { user }
                        event = { event }
                        setRegistration= { setRegistration }
                        isUserRegistered= { isUserRegistered } /> 

                </div>

                {/* Vérifie si l'utilsateur est incrit */}
                { !registration 

                    ? <RankSection 
                        event= { event }
                        user= { user }
                        entries= { entries }
                        isUserRegistered= { isUserRegistered } />

                    : <Register 
                        event= { event }
                        setRegistration= {setRegistration} />

                }
                
            </div>

        </div>

    )
}