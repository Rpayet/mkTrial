import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "../../../../_Provider/EventContext";
import { EventService } from "../../../../_Service/EventService";

export default function RemoveRegistration({ selectedUser, setSelectedUser}) {

    const { event, user, setEventData, filled, setFilled, setIsLoading, isLoading,
            registration, setRegistration } = useContext(EventContext);

    const [userId, setUserId] = useState(null);
    
    useEffect(() => {
        if (user.id === selectedUser) {
            setUserId(user.id);
        } else {
            setUserId(selectedUser.id);
        }
    }, [selectedUser]);
    
    const handleRegistrationRemoval = async (e) => {
        e.preventDefault();
        setIsLoading({...isLoading, user: true});
        await EventService().eventUnregister(event.id, userId, setFilled);
        await EventService().getEvent(event.id, setEventData);
        setFilled(0);
        setRegistration({...registration, unregister: false});
        setIsLoading({...isLoading, user: false});
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setRegistration({...registration, unregister: false, removeConfirmation: false});
        setSelectedUser(null);
    }

    return (
        <div className="flex flex-col gap-2 items-center justify-center text-center">
            <h2 className="text-sm text-silver font-bold">Supprimer l'inscription</h2>
            { (event.user.id === user.id) ? 
                <p className="text-xs text-silver">Êtes-vous sûr de vouloir 
                    <span className="text-mario"> expulser</span> 
                    <span className="font-bold"> {selectedUser?.name}</span> ?</p>
                :
                <p className="text-xs text-silver">Êtes-vous sûr de vouloir vous désinscrire de l'évènement ?</p>
            }
            <div className="flex gap-4">
                <button 
                    disabled={isLoading.user}
                    onClick={handleRegistrationRemoval}
                    className="text-sm border-[1px] border-solid border-silver 
                        hover:text-white hover:bg-mario px-4 py-2 rounded-lg">Oui</button>
                <button 
                    disabled={isLoading.user}
                    onClick={handleCancel}
                    className="text-sm border-[1px] border-solid border-silver 
                        hover:text-white hover:bg-lumi px-4 py-2 rounded-lg">Non</button>
            </div>
            <div 
                style={{height: `${filled}%`}}
                className={`bg-mario absolute
                bottom-0 left-0 right-0 opacity-25 rounded-lg`}>
            </div>
        </div>

    )
}