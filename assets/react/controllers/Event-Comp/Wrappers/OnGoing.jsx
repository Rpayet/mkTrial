import React, { useState } from "react";
import EventInfo from "../UI/OnGoing/Info/EventInfo";
import Userinfo from "../UI/OnGoing/Info/UsersInfo";
import EventRegistration from "./EventRegistration";

export default function OnGoing({ user, entries, event, setEventData }) {

    const [registration, setRegistration] = useState(false);
    const isUserRegistered = user !== null && event.registered.map((registeredUser) => registeredUser.id).includes(user.id);

    const [editor, setEditor] = useState(false);

    return (
        <div className="w-full sm:flex gap-4 p-4">

                <div 
                    className="sm:w-1/3 sm:h-fit bg-white 
                    rounded-xl flex sm:flex-col gap-4 p-4
                    zoomIn">

                    <EventInfo 
                        user= { user }
                        event={ event }
                        setEditor= { setEditor }
                        editor= { editor } />

                    <Userinfo
                        user= { user }
                        event= { event }
                        setRegistration= { setRegistration }
                        isUserRegistered= { isUserRegistered } />

                </div>

                <EventRegistration
                    setEventData= { setEventData }
                    event= { event }
                    user= { user }
                    entries= { entries }
                    editor= { editor }
                    setEditor={ setEditor }
                    isUserRegistered= { isUserRegistered }
                    registration= { registration }
                    setRegistration={ setRegistration } />

        </div>
    )

}