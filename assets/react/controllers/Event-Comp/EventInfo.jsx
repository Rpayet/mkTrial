import React from "react";

export default function EventInfo({ event }) {

    return (

        <div 
            id="event-info"
            className="bg-shell flex flex-col items-center p-2 rounded-t-3xl">
                <div
                    id="event-options" 
                    className="w-full flex justify-around text-white">
                        <span>{`${event.speed}`}</span>
                        <span>Ouvert</span>

                </div>
                <div 
                    id="event-img"
                    className="relative mx-auto">
                        <div 
                        className="bg-shell absolute -top-2 left-1/2 transform -translate-x-1/2
                                        rounded-full">
                            <img 
                                className="w-10 p-1"
                                src={`/assets/admin/img/cups/${event.race.cup.picture}`} 
                                alt={`${event.race.cup.slug}`} />
                        </div>

                        <div className="p-2">
                            <img 
                                className="rounded-lg"
                                src={`/assets/admin/img/races/${event.race.cup.slug}/${event.race.picture}`} 
                                alt={`${event.race.picture}`} />
                        </div>
                        <span 
                            className="block text-white text-center font-bold text-sm">
                                {`${event.race.name.toUpperCase()}`}
                        </span>
        
                </div>

        </div>

    )
}