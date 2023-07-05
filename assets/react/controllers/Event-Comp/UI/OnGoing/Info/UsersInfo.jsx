import React, { useEffect, useState } from "react"
import { AiOutlineUserAdd } from 'react-icons/ai';

export default function Userinfo({ user, event, setRegistration, isUserRegistered, filled }) {

    const [show, setShow] = useState(true);

    useEffect(() => {
        if ( event.capacity != null && user != null ) {

            if ( !isUserRegistered && event.registered.length < event.capacity ) {
                setShow(true);

            } else if ( isUserRegistered && event.capacity.length == event.capacity.registered ) {
                setShow(false);
            } 

        } else if ( !isUserRegistered && user != null && event.capacity == null ) {
            setShow(true);
        } else {
            setShow(false);
        }

    }, [isUserRegistered, event, user, event]);

    return (
    
        <div 
            id="users-info"
            className="flex flex-col justify-center items-center">

            <div className="w-full">

                <div className="flex justify-around">
                    <p className="block text-left text-xs text-silver">Participants</p>
                    
                    {event.capacity >= 3 && <p className="block text-right text-xs text-silver">{event.registered.length}/{event.capacity}</p>}
                    
                </div>
                
                <div 
                    id="Users"
                    className="relative w-4/5 p-4 mx-auto flex flex-wrap gap-2 justify-center items-center
                    bg-slate-100 border-solid border-[1px] border-lumi rounded-lg">
                    {event.registered.map((u, i) => (
                        <img
                            key={i}
                            title={u.name}
                            src={u.picture ? `/assets/user/img/${u.picture}` : `/assets/admin/img/icons/Default.png`}
                            alt="default"
                            className="w-10 rounded-full"
                        />
                    ))}

                    { show &&
                        <AiOutlineUserAdd 
                            onClick={() => {setRegistration(true)}}
                            className="h-10 w-10 p-1 bg-white cursor-pointer rounded-full border-solid border-[1px] border-silver" />
                    }

                    <div 
                        style={{height: `${filled}%`}}
                        className={`bg-lumi absolute
                        bottom-0 left-0 right-0 opacity-25 rounded-lg`}>
                    </div>

                </div>

            </div>

        </div>
    
    )
}

// https://www.npmjs.com/package/react-slick