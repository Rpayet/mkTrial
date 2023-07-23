import React, { useContext } from "react";
import RankSection from "../UI/OnGoing/Rank/RankSection";
import Register from "../UI/OnGoing/Info/Register";
import EventEditor from "../UI/OnGoing/Editor/EventEditor";
import { EventContext } from "../../_Provider/EventContext";

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