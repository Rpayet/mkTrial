import React, { useContext } from "react";
import axios from "axios";
import { Button, BackButton }from "../../../../_GlobalUi/Buttons";
import { EventContext } from "../../../../_Provider/EventContext";

export default function EventStop({ setEditor, setEventStop }) {

    const { eventData, setEventData } = useContext(EventContext);

    const handleCancel = () => {
        setEventStop(false);
    }

    {/* Requête POST Suppression */}
    const handleDeletion = (event) => {
    
        event.preventDefault();

        axios
            .delete(`/api/event/${eventData.event.id}/delete`) 
            .then(response => {
                location = "/" ;
            })
            .catch(errors => console.log('error'));
    }
    
    {/* Requête POST Interruption */}
        const handleInterruption = (event) => {

        event.preventDefault();

        axios
            .post(`/api/event/${eventData.event.id}/interruption`) 
            .then(response => {
                axios.get(`/api/event/${eventData.event.id}`)
                .then(response => {
                    setEventStop(false);
                    setEditor(false);
                    setEventData(response.data); 
                })
                .catch(error => {
                    console.error(error);
                });
                
            })
            .catch(errors => console.log('error'));
    }
    return (
        <div 
            className="sm:w-2/3 flex flex-col gap-4 text-center">

            <BackButton onClick= { handleCancel } />

            <div className="bg-white border-solid border-2 border-mario rounded-lg p-2">
                <div className="margin-auto text-mario">

                <h2 className="font-bold">ATTENTION !</h2>
                <p>Chacune de ces options est irréversible.</p>

                </div>

                <div className="flex gap-8 m-2 justify-center">

                <div className="flex flex-col justify-between gap-2 w-1/2 rounded-lg border-solid border-2 border-silver p-2">
                    <p className="text-sm">Cette action supprime l'événement. Celui-ci ne sera plus visible et ne sera pas archivé.</p>
                    <Button 
                        onClick={ handleDeletion } 
                        text= {'SUPPRIMER'}
                        type= { false } />
                </div>

                <div className="flex flex-col justify-between gap-2 w-1/2 rounded-lg border-solid border-2 border-silver p-2">
                    <p className="text-sm">Cette action interrompt les modifications et archive l'événement. Donne accès immédiatement au tableau final.</p>
                    <Button 
                        onClick={ handleInterruption } 
                        text= {'INTERROMPRE'}
                        type= { false } />
                </div>

            </div>

</div>
        </div>
    )
}