import axios from "axios";
import React, { useContext, useState } from "react";
import { EventContext } from "../../../../_Provider/EventContext";
import { updateProgress } from "../../../../_Service/Loading";

export default function RemoveRegistration({ setUnregister }) {

    const { eventData, setEventData } = useContext(EventContext);
    const { event } = eventData;

    const [filled, setFilled] = useState(0);

    const handleRegistrationRemoval = (e) => {

        e.preventDefault();
      
        const startTime = performance.now();

        axios
            .delete(`/api/event/${event.id}/unregister`)
            .then(response => {
                const endTime = performance.now();
                const loadTime = endTime - startTime;

                updateProgress((loadTime/2), (progress) => {
                    setFilled(progress);
                });

                axios.get(`/api/event/${event.id}`)
                    .then(response => {
                        setEventData(response.data);
                        setFilled(0);
                        setUnregister(false);
                        
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error(error);
            });
    }


    return (
        <div className="relative flex flex-col gap-2 items-center justify-center text-center">
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