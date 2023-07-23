import React, { useContext, useEffect, useState } from "react";
import { BiEditAlt, BiArrowToLeft } from 'react-icons/bi';
import UsersList from "./UsersList";
import { EventContext } from "../../../../_Provider/EventContext";

export default function Userinfo() {

    const { event, user, isUserRegistered, section, registration, setRegistration } = useContext(EventContext);

    const [userAdd, setUserAdd] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        if ( event?.capacity != null && user != null ) {
            if ( !isUserRegistered && event?.registered.length < event?.capacity ) {
                setUserAdd(true);
            } else if ( isUserRegistered && event?.capacity.length == event?.capacity.registered ) {
                setUserAdd(false);
            } 
        } else if ( !isUserRegistered && user != null && event?.capacity == null ) {
            setUserAdd(true);
        } else {
            setUserAdd(false);
        }
    }, [isUserRegistered, event, user, event]);

    const handleRegistration = () => {
        if (event?.user.id != user?.id) {
            setRegistration({...registration, unregister: true, removeConfirmation: true});
        } else {
            setRegistration({...registration, unregister: true});
        }
    }

    const handleCancel = () => {
        setRegistration({...registration, unregister: false, removeConfirmation: false});
        setSelectedUser(null);
    }
    
    return (
    
        <div 
            id="users-info"
            className="flex flex-col justify-center items-center">

            <div className="w-full">

                <div className="flex justify-between px-1">
                    <div className="flex gap-1">
                        <p className="block text-left text-xs text-silver duration-500">Participants</p>
                        
                        { (isUserRegistered && !section.editor && !registration.unregister) && 
                            <BiEditAlt 
                                title="Gérer les participants"
                                onClick={handleRegistration}
                                className={`text-silver hover:text-lumi cursor-pointer w-4 h-4 duration-500`}/>
                        }
                        { (isUserRegistered && registration.unregister && (event?.user.id === user.id) 
                            && !registration.removeConfirmation && !section.editor) &&
                            <BiArrowToLeft
                                title="Revenir à la liste des participants"
                                onClick={handleCancel}
                                className={`text-silver hover:text-lumi cursor-pointer w-4 h-4 duration-500`} />

                        }
                    </div>
                    
                    {event.capacity >= 3 && 
                        <p className="block text-right text-xs text-silver">
                            {event?.registered.length}/{event?.capacity}
                        </p>
                    }
                    
                </div>
                
                <div 
                    id="Users"
                    className="relative p-4 mx-auto flex flex-wrap gap-2 justify-center items-center
                    bg-slate-100 border-solid border-[1px] border-lumi rounded-lg">
                        <UsersList
                            userAdd={userAdd}
                            selectedUser={selectedUser}
                            setSelectedUser={setSelectedUser} />
                        
                </div>

            </div>

        </div>
    
    )
}
