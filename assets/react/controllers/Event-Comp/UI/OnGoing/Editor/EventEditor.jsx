import React, { useState } from "react";
import EditorValidation from "./EditorValidation";
import axios from "axios";
import PrimaryOptions from "../../../../Tournament-Comp/UI/Create/PrimaryOptions";

export default function EventEditor({ event, setEditor }) {

    const eventId = event.id;
    const minDate = new Date().toISOString().substring(0, 10);

    const [data, setData] = useState({
        name: event.name,
        endAt: new Date(event.endAt),
        race: event.race.id,
        speed: event.speed,
        privacy: event.privacy,
        capacity: event.capacity,
    }) 
   
    const handleName = (event) => {
        setData({...data, name: event.target.value})
    }

    {/* Requête POST */}
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        
        event.preventDefault();

        setErrors({});

        axios
            .post(`/api/event/${eventId}/edit`, data)
            .then(response => {
                console.log(response.success)
                setEditor(false)
            })
            .catch(errors => setErrors(errors.response.data));
    }

    return (
        <div className="sm:w-2/3 flex flex-col gap-4">
            
            <h2 className="w-fit font-bold border-solid border-b-2 border-lumi">Modifier les informations de l'événement</h2>
            {/* Messages d'erreurs */}
            <div className={`text-center bg-white rounded-lg w-1/2 my-2 mx-auto`}>

                {errors.name && <p className="text-red-500" >{ errors.name }</p>}
                {errors.endAt && <p className="text-red-500" >{ errors.endAt }</p>}
                {errors.race && <p className="text-red-500" >{ errors.race }</p>}
                {errors.speed && <p className="text-red-500" >{ errors.speed }</p>}
                {errors.privacy && <p className="text-red-500" >{ errors.privacy }</p>}

            </div>

            <form
                className="flex flex-col gap-4" 
                onSubmit={handleSubmit}>

                <div className="flex flex-col"> 
                    <label className="font-bold">Nom</label>
                    <input 
                        value={data.name}
                        onChange={handleName}
                        className="rounded py-1"
                        type="text" />
                </div>
                
                <div>
                    
                    <label className="font-bold">Options</label>
                    <div className="bg-white rounded-lg py-4">
                        <PrimaryOptions 
                            event= { event }
                            data= { data }
                            setData= { setData }
                            minDate= { minDate } />
                    </div>

                </div>

                <EditorValidation setEditor= { setEditor } />

            </form>


        </div>
    )
}