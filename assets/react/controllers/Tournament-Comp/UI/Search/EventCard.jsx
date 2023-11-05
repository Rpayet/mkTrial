import React, { useState } from "react";
import { FaUsers } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function EventCard({ tournament }) {

    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <div 
                id="card"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="flex h-80 justify-center mb-12 overflow-hidden">

                <div className="block rounded-3xl bg-white">

                    {/* Card-Top */}
                    <div 
                        className={`relative text-center pt-1 pb-3 rounded-t-3xl z-20
                        ${tournament.speed == '200cc' 
                            ? 'bg-gradient-to-b from-fast-200 to-fast-400' 
                            : 'bg-gradient-to-b from-slow-200 to-slow-400'}`}>

                        <div className={`relative rounded-lg mt-6 ${isHover ? 'px-20' : 'px-0'} duration-500`}>
                            <div 
                                className={`absolute -top-5 left-1/2 transform -translate-x-1/2 rounded-full w-10
                                
                                ${tournament.speed == '200cc' 
                                    ? 'bg-gradient-to-b from-fast-200 to-fast-400' 
                                    : 'bg-gradient-to-b from-slow-200 to-slow-400'}`}>
                                <img 
                                    className="p-1" 
                                    src={`/assets/admin/img/cups/${tournament.race.cup.picture}`} 
                                    alt={`${tournament.race.cup.picture}`} />
                            </div>
                            <div className={`rounded-lg px-4`}>
                                <img 
                                    className={`rounded-lg mx-auto`}
                                    src={`/assets/admin/img/races/${tournament.race.slug.split('_')[0]}/${tournament.race.picture}`}
                                    alt={`${tournament.race.picture}`} />
                            </div>
                            
                        </div>
                        
                        <p className="text-base text-white font-bold">{ tournament.race.name.toUpperCase() }</p>
                        
                        <div className="flex items-center text-white justify-center gap-1">
                            <FaUsers />

                            <p className="text-center">
                                { tournament.capacity ? 
                                    `${tournament.registered.length}/${tournament.capacity}` 
                                    : 
                                    `Ouvert`}
                            </p>
                        </div>

                    </div>

                    {/* Card-Bottom */}
                    <div className={`relative px-6 mt-2 text-center w-full top-0`} >

                        <div className="absolute top-0 left-0 w-full z-10">

                            <h5 className="my-2 text-xl font-bold leading-tight text-silver">{ tournament.name.toUpperCase() }</h5>
                            <p className="mb-2 text-base italic text-silver hover:text-lumi">@
                                <a 
                                    className=""
                                    href="#">{tournament.user.name}</a>
                            </p>
                            <p className="mb-2 text-base text-silver">{ tournament.endAt }</p>

                            <p className="block mx-auto w-fit bg-white py-1 px-8 rounded-3xl
                                text-lite text-lg text-center border-solid border-[1px] border-lite
                                hover:bg-lumi hover:text-white hover:border-lumi transition ease-out delay-150" 
                                onClick={() => navigate(`/event/${tournament.id}`)}>Consulter</p>
                                
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}