import React from "react";

export default function EventCard({ tournament, index }) {

    return (
        <>
            <div key={index} className="flex h-80 justify-center mb-12 overflow-hidden">

                <div className="block max-w-sm rounded-3xl bg-white">

                    {/* Card-Top */}
                    <div className="relative text-center py-1 pb-3 rounded-t-3xl bg-shell z-20">

                        <div className="flex justify-around text-white pt-2">
                            <p>{`${tournament.speed}`}</p>
                            <p>Ouvert</p>
                        </div>

                        <div className="relative rounded-lg">
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-shell rounded-full w-10">
                                <img 
                                    className="p-1"
                                    src={`/assets/admin/img/cups/${tournament.race.cup.picture}`} 
                                    alt={`${tournament.race.cup.picture}`} />
                            </div>
                            <div className="rounded-lg px-6">
                                <img 
                                    className="rounded-lg"
                                    src={`/assets/admin/img/races/${tournament.race.slug.split('_')[0]}/${tournament.race.picture}`}
                                    alt={`${tournament.race.picture}`} />
                            </div>
                        </div>
                        
                        <p className="text-base text-white font-bold">{ tournament.race.name.toUpperCase() }</p>
                    </div>

                    {/* Card-Bottom */}
                    <div className="relative px-6 mt-2 text-center w-full top-0 duration-300 hover:-top-28">

                        <div className="absolute top-0 left-0 w-full z-10">

                            <h5 className="my-2 text-xl font-bold leading-tight text-silver">{ tournament.name.toUpperCase() }</h5>
                            <p className="mb-2 text-base italic text-silver">@{tournament.user.name}</p>
                            <p className="mb-2 text-base text-silver">{ tournament.endAt }</p>

                            <a className="block mx-auto my-12 w-fit bg-white py-1 px-8 rounded-3xl
                                text-lite text-lg text-center border-solid border-[1px] border-lite
                                hover:bg-mario hover:text-white hover:border-mario
                                transition duration-300 ease-in-out" 
                                href={`/event/${tournament.id}`}>Consulter</a>
                                
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}