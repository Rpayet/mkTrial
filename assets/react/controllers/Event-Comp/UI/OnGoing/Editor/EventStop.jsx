import React, { useContext, useState } from "react";
import { Button, BackButton }from "../../../../_GlobalUi/Buttons";
import { EventContext } from "../../../../_Provider/EventContext";
import { EventService } from "../../../../_Service/EventService";

export default function EventStop({ setEventStop }) {

    const { eventData, setEventData, setSection } = useContext(EventContext);
    const [loading, setLoading] = useState(false);

    const handleCancel = () => {
        setEventStop(false);
    }

    {/* Requête POST Suppression */}
    const handleDeletion = async (e) => {
        e.preventDefault();
        setLoading(true);
        await EventService().deleteEvent(eventData.event.id);
    }
    
    {/* Requête POST Interruption */}
    const handleInterruption = async (e) => {
        e.preventDefault();
        setLoading(true);
        await EventService().postInterruption(eventData.event.id);
        EventService().getEvent(eventData.event.id, setEventData);
    }

    return (
        <div 
            className="sm:w-2/3 flex flex-col gap-4 text-center">

            <BackButton 
                textTitle="Revenir aux modifications"
                onClick= { handleCancel } />

            <div className="bg-white border-solid border-2 border-mario rounded-lg p-2">
                <div className="margin-auto text-mario">

                <h2 className="font-bold">ATTENTION !</h2>
                <p>Chacune de ces options est irréversible.</p>

                </div>

                <div className="flex gap-8 m-2 justify-center">

                <div className="flex flex-col justify-between gap-2 w-1/2 rounded-lg border-solid border-2 border-silver p-2">
                    <p className="text-sm">Cette action supprime l'événement. Celui-ci ne sera plus visible et ne sera pas archivé.</p>
                    <Button 
                        disabled={loading}
                        onClick={ handleDeletion } 
                        text= {'SUPPRIMER'}
                        type= { false } />
                </div>

                <div className="flex flex-col justify-between gap-2 w-1/2 rounded-lg border-solid border-2 border-silver p-2">
                    <p className="text-sm">Cette action interrompt les modifications et archive l'événement. Donne accès immédiatement au tableau final.</p>
                    <Button 
                        disabled={loading}
                        onClick={ handleInterruption } 
                        text= {'INTERROMPRE'}
                        type= { false } />
                </div>

            </div>

</div>
        </div>
    )
}