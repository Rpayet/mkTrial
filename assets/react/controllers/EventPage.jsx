import React, { useState } from "react";
import EventInfo from "./Event-Comp/Info/EventInfo";
import Userinfo from "./Event-Comp/Info/UsersInfo";
import Ranking from "./Event-Comp/Rank/RankSection";
import Register from "./Event-Comp/Info/Register";

export default function EventPage({ event, user, entries }) {

    const [registration, setRegistration] = useState(false);

    let isUserRegistered = null;

    {/* Si Pas d'utilisateur inscrit au tournoi, affiche le bouton d'inscription. */}
    if ( user != null ) {
        isUserRegistered = event.registered.map((registeredUser) => registeredUser.id).includes(user.id);
    }

    return (
        <div>

            <div className="w-full flex gap-4 p-4">

                <div 
                    className="w-1/3 h-fit bg-white rounded-xl flex flex-col gap-4 p-4">

                    <EventInfo event= {event} />

                    <Userinfo 
                        event= { event }
                        user= { user }
                        setRegistration= { setRegistration }
                        isUserRegistered= { isUserRegistered } /> 

                </div>

                { !registration 

                    ?<Ranking 
                        event= { event }
                        user= { user }
                        entries= { entries }
                        isUserRegistered= { isUserRegistered } />

                    :<Register 
                        event= { event }
                        setRegistration= {setRegistration} />

                }

            </div>

        </div>

    )
}