import React, { useContext, useState } from "react";
import { EventContext } from "../../../../_Provider/EventContext";
import { EventService } from "../../../../_Service/EventService";

export default function RemoveRegistration({ userId, setUnregister }) {

    const { eventData, setEventData } = useContext(EventContext);
    const { event } = eventData;

    const [filled, setFilled] = useState(0);

    const handleRegistrationRemoval = (e) => {
        e.preventDefault();
        EventService().eventUnregister(event.id, userId, setEventData, setFilled, setUnregister);
    }

    return (
        <div className="flex flex-col gap-2 items-center justify-center text-center">
            <h2 className="text-sm text-silver font-bold">Supprimer l'inscription</h2>
            <p className="text-xs text-silver">Êtes-vous sûr de vouloir quitter l'événement ?</p>
            <div className="flex gap-4">
                <button 
                    onClick={handleRegistrationRemoval}
                    className="text-sm border-[1px] border-solid border-silver hover:text-white hover:bg-mario px-4 py-2 rounded-lg">Oui</button>
                <button 
                    onClick={() => setUnregister(false)}
                    className="text-sm border-[1px] border-solid border-silver hover:text-white hover:bg-lumi px-4 py-2 rounded-lg">Non</button>
            </div>
            <div 
                style={{height: `${filled}%`}}
                className={`bg-mario absolute
                bottom-0 left-0 right-0 opacity-25 rounded-lg`}>
            </div>
        </div>

    )
}