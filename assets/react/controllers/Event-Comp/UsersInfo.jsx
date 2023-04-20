import React from "react"
import AddUser from "./AddUser"

export default function Userinfo({ event, user, setRegistration }) {

    let isUserRegistered = null;

    if ( user != null ) {
        isUserRegistered = event.registered.map((registeredUser) => registeredUser.id).includes(user.id);
    }
    
    return (
    
        <div 
            id="users-info"
            className="flex flex-col justify-center items-center">

            <div className="w-full mt-4">

                <div className="flex justify-around">
                    <p className="block text-left text-xs text-silver">Participants</p>
                    
                    {event.capacity && <p className="block text-right text-xs text-silver">{event.registered.length}/{event.capacity}</p>}
                    
                </div>
                
                <div 
                    className="w-4/5 p-4 mx-auto flex flex-wrap gap-2 justify-center items-center
                    bg-slate-100 border-solid border-[1px] border-lumi rounded-lg
                     ">
                    {event.registered.map((user, i) => (
                        <img
                            key={i}
                            src={user.picture ? `/assets/user/img/${user.picture}` : `/assets/admin/img/icons/Default.png`}
                            alt="default"
                            className="h-10 rounded-full"
                        />
                    ))}

                { !isUserRegistered && <AddUser setRegistration={ setRegistration } /> }

                </div>

            </div>

        </div>
    
    )
}

// https://www.npmjs.com/package/react-slick