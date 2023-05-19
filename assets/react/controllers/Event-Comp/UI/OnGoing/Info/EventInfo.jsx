import React, { useEffect, useState } from "react";
import RaceInfo from "./RaceInfo";
import DelayInfo from "./DelayInfo";
import EventEditor from "./EditorButton";

export default function SubmissionCard({ user, event }) {

    const [editAuth, setEditAuth] = useState(false)

    useEffect(() => {
        if (user && user.name == event.user.name) {
            setEditAuth(true)
        }
    }, [user, event])

    return (

        <div className="w-1/2 sm:w-full text-center">

            <div className="flex items-center justify-between px-4">
                <h2 className="text-sm text-silver font-bold">{`${event.name}`}</h2>
                <DelayInfo event= {event} />
            </div>

            <div 
                className="w-full">

                <RaceInfo event= {event} />

            </div>

            { editAuth && <EventEditor />}

        </div>

    )
}