import React, { useContext, useState } from "react";
import { EventContext } from "../../../../_Provider/EventContext";
import { EventService } from "../../../../_Service/EventService";
import { toggleSection } from "../../../../_Service/SectionService";

export default function Register() {

    const { isLoading, setIsLoading, setEventData, event, setFilled, setSection, section } = useContext(EventContext);
    const [errors, setErrors] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading({...isLoading, entries: true});
        setSection(toggleSection(section, "ranking"));
        await EventService().eventRegister(event.id, setEventData, setErrors, setFilled);
        setIsLoading({...isLoading, entries: false});
    }

    return (
        <div 
            id="rank-container"
            className="w-2/3 flex flex-col items-center justify-center">
        
            { errors ?
                <div className="w-1/2 text-center bg-white p-10 rounded-xl">
                    <p>{errors}</p>
                </div>
            :
                <div className="relative w-full text-center bg-white p-10 rounded-xl">
                    <p className="text-xl font-bold">Rappel des contraintes</p>
                    <p className="text-mario">Vitesse : {event.speed}</p>
                    <p className="text-mario">Capture d'écran obligatoire</p>


                    <div className="flex">

                        <button
                            onClick={() => setSection(toggleSection(section, "ranking"))}
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