import React, { useState } from "react";

export default function EventCard({ tournament, index }) {

    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <div 
                key={index} 
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
                        
                        <div className="flex justify-center gap-1">
                            <svg width="20px" viewBox="0 0 24 24" fill="none" >
                                <g id="User / Users_Group">
                                <path id="Vector" 
                                    d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 
                                    18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 
                                    18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 
                                    10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 
                                    16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 
                                    9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 
                                    5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 
                                    8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z" 
                                    stroke="#ffffff" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"/>
                                </g>
                            </svg>

                            <p className="text-center text-white">
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

                            <a className="block mx-auto w-fit bg-white py-1 px-8 rounded-3xl
                                text-lite text-lg text-center border-solid border-[1px] border-lite
                                hover:bg-lumi hover:text-white hover:border-lumi transition ease-out delay-150" 
                                href={`/event/${tournament.id}`}>Consulter</a>
                                
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}