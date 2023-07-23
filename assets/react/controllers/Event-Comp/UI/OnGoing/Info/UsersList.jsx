import React, { useContext, useEffect, useState } from "react";
import { AiOutlineUserAdd } from 'react-icons/ai';
import { RxCrossCircled } from 'react-icons/rx';
import RemoveRegistration from "./RemoveRegistration";
import { EventContext } from "../../../../_Provider/EventContext";
import { toggleSection } from "../../../../_Service/SectionService";

export default function UsersList({userAdd, unregister, setUnregister, 
    selectedUser, setSelectedUser, removeConfirmation, setRemoveConfirmation}) {

    const { event, user, filled, isLoading, setSection, section } = useContext(EventContext);

    useEffect(() => {
        if (event?.user.id != user?.id) {
            setSelectedUser(user?.id);
            setRemoveConfirmation(true);
        }
    }, [event, user, selectedUser]);

    const handleUser = (e) => {
        setSelectedUser(e);
        setUnregister(true);
        setRemoveConfirmation(true);
    }

    if (unregister && removeConfirmation) {
        return(
            <RemoveRegistration 
                selectedUser={selectedUser}
                setUnregister={setUnregister}
                setSelectedUser={setSelectedUser}
                setRemoveConfirmation={setRemoveConfirmation} />
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
                            onClick={() => handleUser(u)}
                            title="Supprimer l'inscription"
                            className="absolute top-0 right-0 w-5 h-5 text-silver bg-white 
                            opacity-70 rounded-full cursor-pointer transition-all
                            duration-500 hover:text-white hover:bg-mario hover:opacity-100 hover:w-10 hover:h-10"/>
                    }
                </div>
            ))}

            {( userAdd && !unregister )&&
                <button
                    disabled={isLoading.user}
                    onClick={() => {setSection(toggleSection(section, 'registration'))}}>
                    <AiOutlineUserAdd 
                        title="S'inscrire à l'évènement"
                        className={`${isLoading.user ? 'bg-black' : 'bg-white' }duration-500 h-10 w-10 p-1 
                        bg-white cursor-pointer rounded-full border-solid border-[1px] border-silver`} />
                </button>
            }
            
            <div 
                style={{height: `${filled}%`}}
                className={`bg-lumi absolute
                bottom-0 left-0 right-0 opacity-25 rounded-lg`}>
            </div>
        </>
    )
}