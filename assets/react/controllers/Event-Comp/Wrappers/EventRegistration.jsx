import React from "react";
import RankSection from "../UI/OnGoing/Rank/RankSection";
import Register from "../UI/OnGoing/Info/Register";
import EventEditor from "../UI/OnGoing/Editor/EventEditor";

export default function EventRegistration({
    setEventData, event, user, entries, editor, setEditor,
    isUserRegistered, registration, setRegistration, setLoadingProgress}) {

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
                setEventData= { setEventData }
                event= { event }
                setEditor= { setEditor } />
        )

    }

}