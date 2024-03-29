import React, { useContext } from "react";
import { EventContext } from "../../../../_Provider/EventContext";

export default function RaceInfo() {

    const { event } = useContext(EventContext);

    return (

        <div id="event-info"
            className={`flex flex-col items-center p-4 rounded-3xl ${event?.speed == '200cc' ? 'bg-gradient-to-b from-fast-200 to-fast-400' : 'bg-gradient-to-b from-slow-200 to-slow-400'}`}>
                
                <div 
                    id="event-img"
                    className="relative mx-auto">
                        
                        <div className="bg-gradient-to-b from-speed-200 to-speed-400 absolute 
                                    -top-2 left-1/2 transform -translate-x-1/2
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

                        <span className="block text-white text-center font-bold text-sm">
                                {`${event.race.name.toUpperCase()}`}
                        </span>
        
                </div>

        </div>

    )
}