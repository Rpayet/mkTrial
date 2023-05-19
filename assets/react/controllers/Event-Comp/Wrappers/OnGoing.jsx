import React, { useState } from "react";
import EventInfo from "../UI/OnGoing/Info/EventInfo";
import Userinfo from "../UI/OnGoing/Info/UsersInfo";
import RankSection from "../UI/OnGoing/Rank/RankSection";
import Register from "../UI/OnGoing/Info/Register";
import Main from "./Main";

export default function OnGoing({ 
    user, 
    event,
    entries,
}) {

    const [registration, setRegistration] = useState(false);
    const isUserRegistered = user !== null && event.registered.map((registeredUser) => registeredUser.id).includes(user.id);

    const [editor, setEditor] = useState(false);

    return (
        <div className="w-full sm:flex gap-4 p-4">

                <div 
                    className="sm:w-1/3 sm:h-fit bg-white rounded-xl flex sm:flex-col gap-4 p-4">

                    <EventInfo 
                        user= { user }
                        event= { event }
                        setEditor= { setEditor }
                        editor= { editor } />

                    <Userinfo
                        user= { user }
                        event = { event }
                        setRegistration= { setRegistration }
                        isUserRegistered= { isUserRegistered } />

                </div>

                <Main
                    event= { event }
                    user= { user }
                    entries= { entries }
                    editor= { editor }
                    isUserRegistered= { isUserRegistered }
                    registration= { registration }
                    setRegistration={ setRegistration } />
        </div>
    )

}