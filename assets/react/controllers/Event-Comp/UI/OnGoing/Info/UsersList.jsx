import React, { useContext, useEffect, useState } from "react";
import { AiOutlineUserAdd } from 'react-icons/ai';
import { RxCrossCircled } from 'react-icons/rx';
import RemoveRegistration from "./RemoveRegistration";
import { EventContext } from "../../../../_Provider/EventContext";

export default function UsersList({userAdd, unregister, setUnregister, setRegistration, filled}) {

    const { eventData, setEventData } = useContext(EventContext);
    const { user, event } = eventData;
    const [selectedUser, setSelectedUser] = useState(null);
    const [removeConfirmation, setRemoveConfimation] = useState(false);

    useEffect(() => {
        if (event.user.id != user?.id) {
            setSelectedUser(user?.id);
            setRemoveConfimation(true);
        }
    }, [event, user]);

    const handleUser = (e) => {
        setSelectedUser(e);
        setUnregister(true);
        setRemoveConfimation(true);
    }

    if (unregister && removeConfirmation) {
        return(
            <RemoveRegistration 
                userId={selectedUser}
                setUnregister={setUnregister} />
        )
    }

    return (
        <>
            {event.registered.map((u, i) => (
                <div
                    key={i}
                    className="relative">
                    <img
                        title={u.name}
                        src={u.picture ? `/assets/user/img/${u.picture}` : `/assets/admin/img/icons/Default.png`}
                        alt="default"
                        className="w-10 rounded-full"
                    />
                    { (unregister && (user?.id === event.user.id) && (u.id != event.user.id) ) &&
                        <RxCrossCircled 
                            onClick={() => handleUser(u.id)}
                            title="Supprimer l'inscription"
                            className="absolute top-0 right-0 w-5 h-5 text-silver bg-white opacity-70 rounded-full cursor-pointer transition-all
                            duration-500 hover:text-white hover:bg-mario hover:opacity-100 hover:w-10 hover:h-10"/>
                    }
                </div>
            ))}

            {( userAdd && !unregister )&&
                <AiOutlineUserAdd 
                    onClick={() => {setRegistration(true)}}
                    className="h-10 w-10 p-1 bg-white cursor-pointer rounded-full border-solid border-[1px] border-silver" />
            }
            <div 
                style={{height: `${filled}%`}}
                className={`bg-lumi absolute
                bottom-0 left-0 right-0 opacity-25 rounded-lg`}>
            </div>
        </>
    )
}