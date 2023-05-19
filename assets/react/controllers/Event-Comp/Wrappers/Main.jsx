import React from "react";
import RankSection from "../UI/OnGoing/Rank/RankSection";
import Register from "../UI/OnGoing/Info/Register";
import EventEditor from "../UI/OnGoing/Info/EventEditor";

export default function Main({
    event, user, entries, editor, setEditor,
    isUserRegistered, registration, setRegistration}) {

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
            setRegistration= {setRegistration} />
        )

    } else if (editor && !registration) {

        return (
            <EventEditor setEditor= { setEditor } />
        )

    }

}