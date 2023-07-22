import React from "react";
import RankSection from "../UI/OnGoing/Rank/RankSection";
import Register from "../UI/OnGoing/Info/Register";
import EventEditor from "../UI/OnGoing/Editor/EventEditor";

export default function EventRegistration({ editor, setEditor, registration, setRegistration, setFilled, setLoading }) {


    if (!registration && !editor) {

        return ( <RankSection /> )

    } else if(registration && !editor) {

        return (
            <Register
                setRegistration= {setRegistration}
                setFilled={setFilled} />
        )

    } else if (editor && !registration) {

        return (
            <EventEditor 
                setEditor= { setEditor }
                setLoading={ setLoading } />
        )

    }

}