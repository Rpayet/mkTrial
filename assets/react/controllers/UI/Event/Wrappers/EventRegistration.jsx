import React, { useContext } from "react";
import RankSection from "../OnGoing/Rank/RankSection";
import Register from "../OnGoing/Info/Register";
import EventEditor from "../OnGoing/Editor/EventEditor";
import { EventContext } from "../../../_Provider/EventContext";

export default function EventRegistration() {

    const { section }  = useContext(EventContext);

    if (!section.registration && !section.editor) {
        return ( <RankSection /> )
    } else if(section.registration && !section.editor) {
        return ( <Register /> )
    } else if (section.editor && !section.registration) {
        return ( <EventEditor /> )
    }

}