import React, { useEffect, useState } from "react";
import RaceInfo from "./RaceInfo";
import DelayInfo from "./DelayInfo";
import EventEditor from "./EditorButton";

export default function EventInfo({ user, event, setEditor }) {

    const [editAuth, setEditAuth] = useState(false);
    const [color, setColor] = useState(false);

    useEffect(() => {
        if (user && user.name == event.user.name) {
            setEditAuth(true)
        }
    }, [user, event]);

    useEffect(() => {
        if (event.speed === '200cc') {
            setColor(true);
        } else if (event.speed === '150cc') {
            setColor(false);
        }
    }, [event]);

    return (

        <div className="w-1/2 sm:w-full text-center">

            <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <h2 className="text-sm text-silver font-bold">{event.name.toUpperCase()}</h2>
                    { editAuth && <EventEditor setEditor= { setEditor }  />}
                </div>
                <DelayInfo event= { event } />
            </div>

            <div 
                className="w-full">

                <RaceInfo event= { event } color= { color } />

            </div>

        </div>

    )
}