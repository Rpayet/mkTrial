import React, { useContext } from "react";
import RankSection from "../UI/OnGoing/Rank/RankSection";
import Register from "../UI/OnGoing/Info/Register";
import EventEditor from "../UI/OnGoing/Editor/EventEditor";
import { EventContext } from "../../_Provider/EventContext";

export default function EventRegistration({
    editor, setEditor, eventId,isUserRegistered, 
    registration, setRegistration, setLoadingProgress}) {

    const { eventData, setEventData } = useContext(EventContext);
    const { event, user, entries } = eventData; 

    if (!registration && !editor) {

        return (
            <RankSection 
                event= { event }
                user= { user }
                entries= { entries }
                isUserRegistered= { isUserRegistered } />
        )

    } else if(registration && !editor) {

        return (
            <Register
                event= { event }
                setRegistration= {setRegistration}
                setLoadingProgress= { setLoadingProgress } />
        )

    } else if (editor && !registration) {

        return (
            <EventEditor 
                eventId = { eventId }
                setEventData= { setEventData }
                eventData= { eventData }
                setEditor= { setEditor } />
        )

    }

}