import React, { useContext, useState } from "react";
import { EventContext } from "../../../../_Provider/EventContext";
import { EventService } from "../../../../_Service/EventService";

export default function RemoveRegistration({ selectedUser, setUnregister, setSelectedUser, setRemoveConfirmation }) {

    const { event, user, setEventData, filled, setFilled } = useContext(EventContext);
    const userId = selectedUser ? selectedUser?.id : null;

    const [loading, setLoading] = useState(false);

    const handleRegistrationRemoval = async (e) => {
        e.preventDefault();
        setLoading(true);
        await EventService().eventUnregister(event.id, userId, setEventData, setFilled, setUnregister);
        setLoading(false);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setRemoveConfirmation(false);
        setUnregister(false);
        setSelectedUser(null);
        if (event?.user.id != user?.id) {
            setRemoveConfirmation(true);
        }
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
                    disabled={loading}
                    onClick={handleRegistrationRemoval}
                    className="text-sm border-[1px] border-solid border-silver hover:text-white hover:bg-mario px-4 py-2 rounded-lg">Oui</button>
                <button 
                    disabled={loading}
                    onClick={handleCancel}
                    className="text-sm border-[1px] border-solid border-silver hover:text-white hover:bg-lumi px-4 py-2 rounded-lg">Non</button>
            </div>
            <div 
                style={{height: `${filled}%`}}
                className={`bg-mario absolute
                bottom-0 left-0 right-0 opacity-25 rounded-lg`}>
            </div>
        </div>

    )
}