import React, { useContext, useEffect, useState } from "react";
import EditorRequestOptions from "./EditorRequestOptions";
import { BackButton }from "../../../../_GlobalUi/Buttons";
import { EventContext } from "../../../../_Provider/EventContext";
import EditorValidation from "./EditorValidation";
import EventStop from "./EventStop";
import { toggleSection } from "../../../../_Service/SectionService";
import Options from "./Options";

export default function EventEditor() {

    const [disabled, setDisabled] = useState(true);
    const {data, setData, event, eventData, setSection, section, setModal } = useContext(EventContext);
    const [editValidation, setEditValidation] = useState(false);
    const [eventStop, setEventStop] = useState(false);

    {/* Charge l'état de Data avec la BDD */}
    useEffect(() => {
        if (!data && event) {
            setData({...data, 
                name: event.name,
                speed: event.speed,
                endAt: event.endAt,
                hourEnd: event.hourEnd,
                capacity: event.capacity,
                pinCode: event.pinCode,
                race: event.race.id,
            })
        }
    }, [data, event]);
    
    {/* Met à jour le nom de data */}
    const handleName = (event) => {
        const inputValue = event.target.value;

        if (inputValue.length <= 15) {
            setData({...data, name: event.target.value})
        }
    };

    {/* Ferme le composant*/}
    const handleCancel = () => {
        setSection(toggleSection(section, "ranking"));
        setData({...data, 
            name: event.name,
            speed: event.speed,
            endAt: event.endAt,
            hourEnd: event.hourEnd,
            capacity: event.capacity,
            pinCode: event.pinCode,
            race: event.race.id,
        })
    } 

    {/* Erreurs POST */}
    const [errors, setErrors] = useState({});

    {/* Vérifie Si l'état de Data a été modifié */}
    useEffect(() => {
        const { name, speed, endAt, capacity, hourEnd, pinCode } = event;
        
        if ((data?.name === name) && (data?.speed === speed) && (data?.endAt === endAt) && (data?.pinCode === pinCode) &&
            (data?.capacity === capacity) && (data?.hourEnd === hourEnd)) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [data, event]);

    if (editValidation) {

        return (
            <EditorValidation 
                errors={ errors }
                setErrors= { setErrors }
                setEditValidation= { setEditValidation } />
        )

    } else if (eventStop) {

        return (
            <EventStop setEventStop= { setEventStop } />
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
                <div className={`text-center bg-white rounded-lg w-full my-2 mx-auto`}>
    
                    {errors.name && <p className="text-red-500" >{ errors.name }</p>}
                    {errors.endAt && <p className="text-red-500" >{ errors.endAt }</p>}
                    {errors.speed && <p className="text-red-500" >{ errors.speed }</p>}
                    {errors.capacity && <p className="text-red-500" >{ errors.capacity }</p>}
                    {errors.hourEnd && <p className="text-red-500" >{ errors.hourEnd }</p>}
                    {errors.pinCode && <p className="text-red-500" >{ errors.pinCode }</p>}
    
                </div>
    
                {data && (
                    <form
                        className="flex flex-col gap-4">
    
                        <div className="flex flex-col"> 
                            <div className="flex justify-between">
                                <div className="flex gap-1 items-center">
                                    <label className="font-bold">Nom de l'événement</label>
                                    <p className="text-xs text-mario" >{data.name.length < 3 && 'Le nom du tournoi doit comporter 3 caractères minimum.'}</p>
                                </div>
                                <p className={`text-sm ${(data.name.length == 15 || data.name.length < 3) && 'text-mario'}`} >
                                    {data.name.length}/15
                                </p>
                            </div>
                            <input 
                                value={data.name}
                                onChange={handleName}
                                className="rounded py-1"
                                type="text" />
                        </div>
                        
                        <div>
                            
                            <label className="font-bold">Options</label>
                            <div className="bg-white rounded-lg py-4">
                                <Options
                                    setModal={setModal}
                                    eventData={ eventData }
                                    setData= { setData }
                                    data= { data } />
                            </div>
    
                        </div>
    
                        <EditorRequestOptions 
                            disabled= { disabled }
                            setEditValidation= { setEditValidation }
                            setEventStop= { setEventStop } />
    
                    </form>
                )}
    
    
            </div>
        )
    
    }
}