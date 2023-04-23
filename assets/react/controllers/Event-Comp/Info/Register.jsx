import axios from "axios";
import React, { useState } from "react";

export default function Ranking({ event, setRegistration }) {

    const [error, setError] = useState(null);

    const handleCancel = () => {
        setRegistration(false);
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const data = {
            id: event.id
        };

        axios
            .post("/api/event/register", data)
            .then(response => {
                if (response.data.success) {
                    window.location.reload();
                } else {
                    setError(response.data.error);
                }
                
            })
            .catch(error => {
                console.log(error);
            });
        
            setRegistration(false);
    }

    return (
        <div 
            id="rank-container"
            className="w-2/3 flex flex-col items-center justify-center">
        
            { error ?
                <div className="w-1/2 text-center bg-white p-10 rounded-xl">
                    <p>{error}</p>
                </div>
            :
                <div className="w-full text-center bg-white p-10 rounded-xl">
                    <p className="text-xl font-bold">Rappel des contraintes</p>
                    <p className="text-mario">Vitesse : {event.speed}</p>
                    <p className="text-mario">Capture d'écran obligatoire</p>


                    <div className="flex">

                        <button
                            onClick={handleCancel}
                            type="button" 
                            className="block mx-auto my-6 w-fit bg-white py-1 px-8 rounded-3xl
                            text-lite text-lg text-center border-solid border-[1px] border-lite
                            hover:bg-mario hover:text-white hover:border-mario
                            transition duration-300 ease-in-out">
                            Annuler
                        </button>
                        
                        <button
                            onClick={handleSubmit}
                            type="button" 
                            className="block mx-auto my-6 w-fit bg-white py-1 px-8 rounded-3xl
                            text-lite text-lg text-center border-solid border-[1px] border-lite
                            hover:bg-lumi hover:text-white hover:border-lumi
                            transition duration-300 ease-in-out">
                            Accepter
                        </button>

                    </div>
                </div>
            }
                
        
        </div>

    )
}