import React, { useState } from "react";
import EventInfo from "../UI/OnGoing/Info/EventInfo";
import Userinfo from "../UI/OnGoing/Info/UsersInfo";
import EventRegistration from "./EventRegistration";
import { DataProvider } from "../../_Provider/EventContext";


export default function OnGoing({ user, eventId, event, setEventData }) {

    const [registration, setRegistration] = useState(false);
    const isUserRegistered = user !== null && event.registered.map((registeredUser) => registeredUser.id).includes(user.id);

    const [editor, setEditor] = useState(false);

    const [loadingProgress, setLoadingProgress] = useState(0);

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
                        isUserRegistered= { isUserRegistered }
                        loadingProgress= { loadingProgress } />

                </div>

                <EventRegistration
                    eventId = { eventId }
                    setEventData= { setEventData }
                    editor= { editor }
                    setEditor={ setEditor }
                    isUserRegistered= { isUserRegistered }
                    registration= { registration }
                    setRegistration={ setRegistration } 
                    setLoadingProgress= { setLoadingProgress } />

        </div>
    )

}