import React from "react";
import LeaderBoard from "../UI/Finished/LearderBoard/LeaderBoard";

export default function Finished({ event, entries }) {

    return (
        <LeaderBoard 
            event= { event }
            entries= { entries } />
    )
}