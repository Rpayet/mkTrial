import React, { useContext } from "react";
import RankSection from "../UI/OnGoing/Rank/RankSection";
import Register from "../UI/OnGoing/Info/Register";
import EventEditor from "../UI/OnGoing/Editor/EventEditor";
import { EventContext } from "../../_Provider/EventContext";

export default function EventRegistration({ registration, setRegistration}) {

    const { section }  = useContext(EventContext);


    if (!registration && !section.editor) {

        return ( 
            <RankSection /> 
        )

    } else if(registration && !section.editor) {

        return (
            <Register setRegistration= {setRegistration} />
        )

    } else if (section.editor && !registration) {

        return (
            <EventEditor />
        )

    }

}