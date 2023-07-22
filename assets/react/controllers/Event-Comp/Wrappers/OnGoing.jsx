import React, { useContext, useState } from "react";
import EventInfo from "../UI/OnGoing/Info/EventInfo";
import Userinfo from "../UI/OnGoing/Info/UsersInfo";
import EventRegistration from "./EventRegistration";
import { EventContext } from "../../_Provider/EventContext";

export default function OnGoing() {

    const { animation, eventId } = useContext(EventContext);
    const [registration, setRegistration] = useState(false);
    const [filled, setFilled] = useState(0); // provider
    const [editor, setEditor] = useState(false); // provider
    const [unregister, setUnregister] = useState(false); // provider
    const [loading, setLoading] = useState(false); // provider

    return (
        <div className="w-full sm:flex gap-4 p-4">

            <div 
                className={`relative sm:w-1/3 sm:h-fit bg-white 
                rounded-xl flex sm:flex-col gap-4 p-4 mb-2
                ${animation.firstAnimation && 'zoomIn'} ${loading && 'shake'}`}>

                <EventInfo 
                    setEditor= { setEditor }
                    editor= { editor }
                    unregister={ unregister } />

                <Userinfo
                    editor= { editor }
                    setRegistration= { setRegistration }
                    filled={filled}
                    unregister={ unregister }
                    setUnregister={ setUnregister } />

                { loading &&
                    <img 
                        className="w-44 absolute -top-44 right-0 z-10 origin-bottom"
                        src="/assets/admin/img/gif/Lakitu---Hammer.gif" 
                        alt="Loading" />
                }

            </div>

            <EventRegistration
                eventId = { eventId }
                editor= { editor }
                setEditor={ setEditor }
                registration= { registration }
                setRegistration={ setRegistration }
                setFilled={setFilled}
                setLoading={setLoading} />

        </div>
    )

}