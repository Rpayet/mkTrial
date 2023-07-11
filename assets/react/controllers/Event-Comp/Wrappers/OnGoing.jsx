import React, { useState } from "react";
import EventInfo from "../UI/OnGoing/Info/EventInfo";
import Userinfo from "../UI/OnGoing/Info/UsersInfo";
import EventRegistration from "./EventRegistration";

export default function OnGoing({ user, eventId, event, setEventData }) {

    const [registration, setRegistration] = useState(false);
    const isUserRegistered = user !== null && event.registered.map((registeredUser) => registeredUser.id).includes(user.id);
    const [filled, setFilled] = useState(0);
    const [editor, setEditor] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <div className="w-full sm:flex gap-4 p-4">

                <div 
                    className="relative sm:w-1/3 sm:h-fit bg-white 
                    rounded-xl flex sm:flex-col gap-4 p-4 mb-2
                    zoomIn">

                    <EventInfo 
                        user= { user }
                        event={ event }
                        setEditor= { setEditor }
                        editor= { editor } />

                    <Userinfo
                        setRegistration= { setRegistration }
                        isUserRegistered= { isUserRegistered }
                        filled={filled} />

                    { loading &&
                        <img 
                            className="w-44 absolute -top-44 right-0 z-10 origin-bottom"
                            src="/assets/admin/img/gif/Lakitu---Hammer.gif" 
                            alt="Loading" />
                    }

                </div>

                <EventRegistration
                    eventId = { eventId }
                    setEventData= { setEventData }
                    editor= { editor }
                    setEditor={ setEditor }
                    isUserRegistered= { isUserRegistered }
                    registration= { registration }
                    setRegistration={ setRegistration }
                    setFilled={setFilled}
                    setLoading={setLoading} />

        </div>
    )

}