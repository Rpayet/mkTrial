import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../../../_GlobalUi/Buttons";
import { EventContext } from "../../../../_Provider/EventContext";
import { getFormattedDate } from "../../../_Services/FormatTime";
import { EventService } from "../../../../_Service/EventService";

export default function EditorValidation({ setEditValidation, setErrors, errors }) {

    const {data, setData, event, setEventData, setIsLoading, section, setSection} = useContext(EventContext);

    {/* Ferme le composant */}
    const handleCancel = () => {
        setEditValidation(false);
        setData(data);
    }

    {/* Requête POST */}
    const handleSubmit = async (e) => {
        e.preventDefault();
        setEditValidation(false);
        const clear = await EventService().updateEvent(event.id, data, setErrors, errors);
        if (!clear) {
            setSection({...section, editor: false, ranking: true, highlight: false});
            setIsLoading(true);
            await EventService().getEvent(event.id, setEventData);
            setIsLoading(false);
        }
    }
    
    return (

        <div className="sm:w-2/3 flex flex-col gap-4 bg-white rounded-lg text-center justify-center">

            <div className="margin-auto">

                <h2 className="font-bold">Récapitulatif des modifications</h2>

            </div>

            <div>

                {data.name != event.name && <p>Nom :<span className="font-bold"> {data.name}</span></p>}
                {data.speed != event.speed && <p>Vitesse :<span className="font-bold"> {data.speed}</span></p>}
                {data.endAt != event.endAt && <p>Fin de l'événement :<span className="font-bold"> {getFormattedDate(data.endAt)}</span></p>}
                {data.capacity != event.capacity && <p>Place disponible :<span className="font-bold"> {data.capacity ? data.capacity : 'Ouvert'}</span></p>}
                {data.privacy != event.privacy && <p>Confidentialité :<span className="font-bold"> {data.privacy ? 'Privée' : 'Public'}</span></p>}
                {data.hourEnd != event.hourEnd && <p>Heure de fin :<span className="font-bold"> {data.hourEnd}</span></p>}          

            </div> 
            

            <div className="flex gap-4 my-2">

                <Button 
                    onClick= { handleCancel  } 
                    text= {'Annuler'}
                    type= { false } /> 

                <Button 
                    onClick= { handleSubmit } 
                    text= {'Valider'}
                    type= { true } /> 
            
            </div>

        </div>
    )
}