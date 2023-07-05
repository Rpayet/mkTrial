import axios from "axios";
import React, { useContext, useState } from "react";
import { EventContext } from "../../../../_Provider/EventContext";
import { updateProgress } from "../../../../_Service/Loading";

export default function Register({ event, setRegistration, setFilled }) {

    const { eventData, setEventData } = useContext(EventContext);
    const [error, setError] = useState(null);

    const handleCancel = () => {
        setRegistration(false);
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const startTime = performance.now();
        const data = {
            id: event.id
        };

        axios
            .post("/api/event/register", data)
            .then(response => {
                if (response.data) {
                    const endTime = performance.now();
                    const loadTime = endTime - startTime;
        
                    updateProgress((loadTime/2), (progress) => {
                        setFilled(progress);
                    });
        
                    axios.get(`/api/event/${event.id}`)
                        .then(response => {
                            setRegistration(false);
                            setEventData(response.data);
                            setFilled(0);
                        })
                        .catch(error => {
                            console.error(error);
                        });
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
                <div className="relative w-full text-center bg-white p-10 rounded-xl">
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