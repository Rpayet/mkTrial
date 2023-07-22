import React, { useContext } from "react";
import RankSection from "../UI/OnGoing/Rank/RankSection";
import Register from "../UI/OnGoing/Info/Register";
import EventEditor from "../UI/OnGoing/Editor/EventEditor";
import { EventContext } from "../../_Provider/EventContext";

export default function EventRegistration({
    editor, setEditor, 
    registration, setRegistration, setFilled, setLoading }) {

    const { eventData } = useContext(EventContext);
    const { event, user, entries } = eventData; 

    if (!registration && !editor) {

        return (
            <RankSection 
                event= { event }
                user= { user }
                entries= { entries } />
        )

    } else if(registration && !editor) {

        return (
            <Register
                event= { event }
                setRegistration= {setRegistration}
                setFilled={setFilled} />
        )

    } else if (editor && !registration) {

        return (
            <EventEditor 
                eventData= { eventData }
                setEditor= { setEditor }
                setLoading={ setLoading } />
        )

    }

}