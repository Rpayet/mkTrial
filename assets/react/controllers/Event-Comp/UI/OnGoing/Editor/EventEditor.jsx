import React, { useContext, useEffect, useState } from "react";
import EditorRequestOptions from "./EditorRequestOptions";
import PrimaryOptions from "../../../../Tournament-Comp/UI/Create/PrimaryOptions";
import { BackButton }from "../../../../_GlobalUi/Buttons";
import { EventContext } from "../../../../_Provider/EventContext";
import EditorValidation from "./EditorValidation";
import EventStop from "./EventStop";

export default function EventEditor({ setEditor, eventData, setLoading }) {

    const [disabled, setDisabled] = useState(true);
    const {data, setData} = useContext(EventContext);
    const [editValidation, setEditValidation] = useState(false);
    const [eventStop, setEventStop] = useState(false);

    {/* Charge l'état de Data avec la BDD */}
    useEffect(() => {
        if (!data) {
            setData({...data, 
                name: eventData.event.name,
                speed: eventData.event.speed,
                endAt: eventData.event.endAt,
                capacity: eventData.event.capacity,
                privacy: eventData.event.privacy,
                race: eventData.event.race.id,
            })
        }
    }, [data, eventData]);

    {/* Met à jour le nom de data */}
    const handleName = (event) => {
        const inputValue = event.target.value;

        if (inputValue.length <= 15) {
            setData({...data, name: event.target.value})
        }
    };

    {/* Ferme le composant*/}
    const handleCancel = () => {
        setEditor(false)
        setData({...data, 
            name: eventData.event.name,
            speed: eventData.event.speed,
            endAt: eventData.event.endAt,
            capacity: eventData.event.capacity,
            privacy: eventData.event.privacy,
            race: eventData.event.race.id,
        })
    } 

    {/* Erreurs POST */}
    const [errors, setErrors] = useState({});

    {/* Vérifie Si l'état de Data a été modifié */}
    useEffect(() => {
        const { name, speed, endAt, capacity, privacy } = eventData.event;
        
        if (data?.name === name && data?.speed === speed && data?.endAt === endAt &&
            data?.capacity === capacity && data?.privacy === privacy) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [data, eventData]);

    if (editValidation) {

        return (
            <EditorValidation 
                setEditor= { setEditor }
                errors={ errors }
                setErrors= { setErrors }
                setEditValidation= { setEditValidation }
                setLoading={ setLoading } />
        )

    } else if (eventStop) {

        return (
            <EventStop 
                setEditor= { setEditor }
                setEventStop= { setEventStop } />
        )

    } else {

        return (
            <div className="sm:w-2/3 flex flex-col gap-4">
                
                <div className="flex gap-2 items-center justify-between">
    
                    <BackButton 
                        textTitle="Annuler les modifications"
                        onClick= { handleCancel } />
    
                    <h2 className="font-bold">Modifier les informations de l'événement</h2>
    
                </div>
    
                {/* Messages d'erreurs */}
                <div className={`text-center bg-white rounded-lg w-1/2 my-2 mx-auto`}>
    
                    {errors.name && <p className="text-red-500" >{ errors.name }</p>}
                    {errors.endAt && <p className="text-red-500" >{ errors.endAt }</p>}
                    {errors.race && <p className="text-red-500" >{ errors.race }</p>}
                    {errors.speed && <p className="text-red-500" >{ errors.speed }</p>}
                    {errors.privacy && <p className="text-red-500" >{ errors.privacy }</p>}
    
                </div>
    
                {data && (
                    <form
                        className="flex flex-col gap-4">
    
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
                                    data= { data }
                                    eventData= { eventData } />
                            </div>
    
                        </div>
    
                        <EditorRequestOptions 
                            disabled= { disabled }
                            setEditor= { setEditor } 
                            setEditValidation= { setEditValidation }
                            setEventStop= { setEventStop } />
    
                    </form>
                )}
    
    
            </div>
        )
    
    }
}