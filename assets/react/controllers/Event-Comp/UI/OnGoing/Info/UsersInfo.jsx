import React, { useEffect, useState } from "react"
import { BiEditAlt } from 'react-icons/bi';
import UsersList from "./UsersList";
import RemoveRegistration from "../Info/RemoveRegistration";


export default function Userinfo({ user, event, setRegistration, isUserRegistered, filled }) {

    const [userAdd, setUserAdd] = useState(false);
    const [unregister, setUnregister] = useState(false);

    useEffect(() => {
        if ( event.capacity != null && user != null ) {

            if ( !isUserRegistered && event.registered.length < event.capacity ) {
                setUserAdd(true);

            } else if ( isUserRegistered && event.capacity.length == event.capacity.registered ) {
                setUserAdd(false);
            } 

        } else if ( !isUserRegistered && user != null && event.capacity == null ) {
            setUserAdd(true);
        } else {
            setUserAdd(false);
        }

    }, [isUserRegistered, event, user, event]);

    return (
    
        <div 
            id="users-info"
            className="flex flex-col justify-center items-center">

            <div className="w-full">

                <div className="flex justify-between px-1">
                    <div className="flex gap-1">
                        <p className="block text-left text-xs text-silver">Participants</p>
                        { !unregister && 
                            <BiEditAlt 
                                title="Gérer les participants"
                                onClick={() => {setUnregister(true)}}
                                className={`text-silver hover:text-lumi cursor-pointer w-4 h-4 `}/>
                        }
                    </div>
                    
                    {event.capacity >= 3 && <p className="block text-right text-xs text-silver">{event.registered.length}/{event.capacity}</p>}
                    
                </div>
                
                <div 
                    id="Users"
                    className="relative p-4 mx-auto flex flex-wrap gap-2 justify-center items-center
                    bg-slate-100 border-solid border-[1px] border-lumi rounded-lg">
                        { unregister 
                            ? <RemoveRegistration setUnregister={setUnregister} />
                            : <UsersList
                                event={event}
                                userAdd={userAdd}
                                setRegistration={setRegistration}
                                filled={filled} />
                        }
                        
                        
                </div>

            </div>

        </div>
    
    )
}

// https://www.npmjs.com/package/react-slick