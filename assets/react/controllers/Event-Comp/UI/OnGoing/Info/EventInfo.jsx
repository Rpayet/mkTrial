import React, { useContext, useEffect, useState } from "react";
import RaceInfo from "./RaceInfo";
import DelayInfo from "./DelayInfo";
import { BiEditAlt } from 'react-icons/bi';
import { EventContext } from "../../../../_Provider/EventContext";

export default function EventInfo({ unregister }) {

    const { event, user, setSection, section } = useContext(EventContext);

    const [editAuth, setEditAuth] = useState(false);

    useEffect(() => {
        if (user && user.name == event.user.name) {
            setEditAuth(true)
        }
    }, [user, event]);

    return (

        <div className="w-1/2 sm:w-full text-center">

            <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                    <h2 className="text-sm text-silver font-bold">{event.name.toUpperCase()}</h2>
                    { (editAuth && !unregister) &&         
                        <BiEditAlt 
                            title="Éditer les informations de l'évènement"
                            onClick={() => {setSection({...section, editor: true, ranking: false, highlight: false})}}
                            className={`text-silver hover:text-lumi cursor-pointer w-4 h-4 ${section.editor ? 'hidden' : ''}`}/>
}
                </div>
                <DelayInfo />
            </div>

            <div className="w-full">

                <RaceInfo />

            </div>

        </div>

    )
}