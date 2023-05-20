import React, { useState } from "react";
import EditorValidation from "./EditorValidation";
import axios from "axios";

export default function EventEditor({ event, setEditor }) {

    const [eventEdit, setEventEdit] = useState({
        id: event.id,
        name: event.name,
        endAt: event.endAt,
        race: event.race,
        speed: event.speed,
        privacy: event.privacy,
        capacity: event.capacity,
    }) 
    
    const handleName = (event) => {
        setEventEdit({...eventEdit, name: event.target.value})
    }

    {/* Requête POST */}
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        
        event.preventDefault();

        setErrors({});

        axios
            .post(`/api/event/${eventEdit.id}/edit`, eventEdit)
            .then(response => {
                console.log(response.success)
            })
            .catch(errors => setErrors(errors.response.data));
    }

    return (
        <div className="sm:w-2/3 flex flex-col gap-4">
            
            <h2 className="font-bold">Modifier les informations de l'événement</h2>

            <form onSubmit={handleSubmit}>

                <div className="flex flex-col gap-2"> 
                    <label htmlFor="">Nom</label>
                    <input 
                        value={eventEdit.name}
                        onChange={handleName}
                        className="rounded py-1"
                        type="text" />
                </div>

                <EditorValidation setEditor= { setEditor } />

            </form>


        </div>
    )
}