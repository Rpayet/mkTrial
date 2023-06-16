import React, { useEffect, useState } from "react"
import AddUser from "./AddUser"

export default function Userinfo({ user, event, setRegistration, isUserRegistered }) {

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
                    className="w-4/5 p-4 mx-auto flex flex-wrap gap-2 justify-center items-center
                    bg-slate-100 border-solid border-[1px] border-lumi rounded-lg
                     ">
                    {event.registered.map((u, i) => (
                        <img
                            key={i}
                            title={u.name}
                            src={u.picture ? `/assets/user/img/${u.picture}` : `/assets/admin/img/icons/Default.png`}
                            alt="default"
                            className="w-10 rounded-full"
                        />
                    ))}

                { show 
                    && <AddUser 
                        user= { user }
                        setRegistration= { setRegistration }
                        isUserRegistered= { isUserRegistered } /> 
                }

                </div>

            </div>

        </div>
    
    )
}

// https://www.npmjs.com/package/react-slick