import React, { useContext, useEffect } from "react";
import { AiOutlineUserAdd } from 'react-icons/ai';
import { RxCrossCircled } from 'react-icons/rx';
import RemoveRegistration from "./RemoveRegistration";
import { EventContext } from "../../../../_Provider/EventContext";
import { toggleSection } from "../../../../_Service/SectionService";

export default function UsersList({userAdd, selectedUser, setSelectedUser}) {

    const { event, user, filled, isLoading, setSection, section, registration, setRegistration } = useContext(EventContext);

    useEffect(() => {
        if (event?.user.id != user?.id) {
            setSelectedUser(user?.id);
            setRegistration({...registration, removeConfirmation: false});
        }
    }, [event, user, selectedUser]);

    const handleUser = (e) => {
        setSelectedUser(e);
        setRegistration({...registration, removeConfirmation: true, unregister: true});
    }

    if (registration.unregister && registration.removeConfirmation) {
        return(
            <RemoveRegistration selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        )
    }

    return (
        <>
            {event.registered.map((u) => (
                <div 
                    key={u.id}
                    className="text-center flex flex-col items-center">
                    <div
                        className="relative">
                        <img
                            title={u.name}
                            src={u.picture ? `/assets/user/img/${u.picture}` : `/assets/admin/img/icons/Default.png`}
                            alt="default"
                            className="w-10 rounded-full"
                        />
                        { (registration.unregister && (user?.id === event.user.id) && (u.id != event.user.id) ) &&
                            <RxCrossCircled 
                                onClick={() => handleUser(u)}
                                title="Supprimer l'inscription"
                                className="absolute top-0 right-0 w-5 h-5 text-silver bg-white 
                                opacity-70 rounded-full cursor-pointer transition-all
                                duration-500 hover:text-white hover:bg-mario hover:opacity-100 hover:w-10 hover:h-10"/>
                        }
                    </div>
                    {/** TODO: Si name trop long, reduire la taille */}
                    <p className='text-xs'>{u.name}</p> 
                </div>
            ))}

            {( userAdd && !registration.unregister )&&
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