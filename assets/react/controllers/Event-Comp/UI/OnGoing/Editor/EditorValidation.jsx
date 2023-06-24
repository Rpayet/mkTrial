import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../../../../_GlobalUi/Buttons";
import { DataContext, EventContext } from "../../../../_Provider/EventContext";
import { getFormattedDate } from "../../../_Services/FormatTime";

export default function EditorValidation({ setEditValidation, setErrors, setEditor }) {

    const {data, setData} = useContext(DataContext);
    const {eventData, setEventData} = useContext(EventContext);

    console.log(data);

    {/* Ferme le composant */}
    const handleCancel = () => {
        setEditValidation(false);
        setData(data);
    }

    {/* Requête POST */}
    const handleSubmit = (event) => {
        
        event.preventDefault();

        setErrors({});

        axios
            .post(`/api/event/${eventData.event.id}/edit`, data) 
            .then(response => {
                axios.get(`/api/event/${eventData.event.id}`)
                .then(response => {
                    setEventData(response.data); 
                    setEditor(false);
                })
                .catch(error => {
                    console.error(error);
                });
            })
            .catch(errors => setErrors(errors.response.data));
    }

    
    return (

        <div className="sm:w-2/3 flex flex-col gap-4 bg-white rounded-lg text-center justify-center">

            <div className="margin-auto">

                <h2 className="font-bold">Récapitulatif des modifications</h2>

            </div>

            <div className="">

                {data.name != eventData.event.name && <p>Nom :<span className="font-bold"> {data.name}</span></p>}
                {data.speed != eventData.event.speed && <p>Vitesse :<span className="font-bold"> {data.speed}</span></p>}
                {data.endAt != eventData.event.endAt && <p>Fin de l'événement :<span className="font-bold"> {getFormattedDate(data.endAt)}</span></p>}
                {data.capacity != eventData.event.capacity && <p>Place disponible :<span className="font-bold"> {data.capacity ? data.capacity : 'Ouvert'}</span></p>}
                {data.privacy != eventData.event.privacy && <p>Confidentialité :<span className="font-bold"> {data.privacy ? 'Privée' : 'Public'}</span></p>}              

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