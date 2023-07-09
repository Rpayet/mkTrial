import React from "react";
import { AiOutlineUserAdd } from 'react-icons/ai';

export default function UsersList({event, userAdd, setRegistration, filled}) {

    return (
        <>
            {event.registered.map((u, i) => (
                <img
                    key={i}
                    title={u.name}
                    src={u.picture ? `/assets/user/img/${u.picture}` : `/assets/admin/img/icons/Default.png`}
                    alt="default"
                    className="w-10 rounded-full"
                />
            ))}

            { userAdd &&
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