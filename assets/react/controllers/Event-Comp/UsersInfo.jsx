import React from "react"

export default function Userinfo({ event }) {


    return (
    
        <div 
            id="users-info"
            className="flex flex-col justify-center items-center">

            <div 
                id="moderator"
                className="flex items-center">
                <img 
                    src={`${event.user.picture ? event.user.picture : '/assets/admin/img/icons/Default.png'}`}
                    alt={`${event.user.picture ? event.user.name : 'default'}`}
                    className="w-16 bg-lumi p-1 rounded-full" />
                <div className="ml-2">
                    <a href="#"><span className="font-bold">{`${event.user.name}`}</span></a>
                    <p className="text-sm">{`Créé le ${new Date(event.createdAt.date).toLocaleDateString()}`}</p>
                </div>
            </div>

            <div className="w-full mt-4">

                <div className="flex justify-around">
                    <p className="block text-left text-xs text-silver">Participants</p>
                    
                    {event.capacity && <p className="block text-right text-xs text-silver">1/{event.capacity}</p>}
                    
                </div>
                <div 
                    className="w-4/5 p-4 mx-auto flex flex-wrap gap-2 justify-center items-center
                    bg-slate-100 border-solid border-[1px] border-lumi rounded-lg
                     ">
                    {Array.from({ length: 1 }).map((_, i) => (
                        <img
                            key={i}
                            src="/assets/admin/img/icons/Default.png"
                            alt="default"
                            className="h-10 rounded-full"
                        />
                    ))}
                    <img 
                        src="/assets/admin/img/icons/UserAdd.svg"
                        alt="useradd"
                        className="h-10 p-1 bg-white border-solid border-[1px] border-silver rounded-full" />
                </div>

            </div>

        </div>
    
    )
}

// https://www.npmjs.com/package/react-slick