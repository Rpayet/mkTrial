import React, { useState } from "react";
import EditorValidation from "./EditorValidation";
import axios from "axios";
import PrimaryOptions from "../../../../Tournament-Comp/UI/Create/PrimaryOptions";

export default function EventEditor({ setEventData, event, setEditor }) {

    const eventId = event.id;

    const [data, setData] = useState({
        name: event.name,
        race: event.race.id,
        speed: event.speed,
        endAt: event.endAt,
        capacity: event.capacity,
        privacy: event.privacy
    });
   
    const handleName = (event) => {
        const inputValue = event.target.value;

        if (inputValue.length <= 15) {
            setData({...data, name: event.target.value})
        }
    };

    {/* Requête POST */}
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        
        event.preventDefault();

        setErrors({});

        axios
            .post(`/api/event/${eventId}/edit`, data) 
            .then(response => {
                axios.get(`/api/event/${eventId}`)
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
        <div className="sm:w-2/3 flex flex-col gap-4">
            
            <div className="flex gap-2 items-center justify-between">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" 
                        d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 
                        11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 
                        18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 
                        20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 
                        3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 
                        11.7071 4.29289Z" 
                        fill="#000000"/>
                </svg>
                <h2 className="w-fit font-bold border-solid border-b-2 border-lumi">Modifier les informations de l'événement</h2>
            </div>
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
                            setData= { setData }
                            data= {data}
                            event= { event } />
                    </div>

                </div>

                <EditorValidation setData= { setData } data= { data } event= { event } setEditor= { setEditor } />

            </form>


        </div>
    )
}