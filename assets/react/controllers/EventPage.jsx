import React from "react";

export default function EventPage({ event }) {

    const handleTimer = (e) => {

        const value = e.target.value;

        if (value.length === 1) {
            e.target.value += ":";
        } else if (value.length === 4) {
            e.target.value += ".";
        } else if (value.length >= 8) {
            e.preventDefault();
        }
    }

    return (
        <div className="w-full">

            <div 
                id="event-container"
                className="w-1/3 rounded-lg">

                <div 
                    id="event-info"
                    className="bg-shell flex flex-col items-center p-2 rounded-t-lg">
                        <div
                            id="event-options" 
                            className="w-full flex justify-around text-white">
                                <span>{`${event.speed}`}</span>
                                <span>Ouvert</span>

                        </div>
                        <div 
                            id="event-img"
                            className="relative mx-auto">
                                <div className="bg-shell absolute -top-2 left-1/2 transform -translate-x-1/2
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
                
                        </div>

                </div>

                <div 
                    id="entry-form"
                    className="bg-white w-full p-2">
                        <div 
                            id="form-timer"
                            className="flex flex-col w-3/5 mx-auto">
                                <label 
                                    htmlFor="timer"
                                    className="text-xs text-center text-silver">Temps</label>
                                <input 
                                    id="timer"
                                    type="text"
                                    pattern="^[0-9]:[0-5][0-9].[0-9]{1,3}$"
                                    placeholder="0:00.000"
                                    className="py-1 rounded-lg text-center"
                                    onKeyDown={handleTimer} />

                        </div>
                        <div 
                            id="form-timer"
                            className="flex flex-col w-3/5 mx-auto">
                                <label 
                                    htmlFor="timer"
                                    className="text-xs text-center text-silver">Capture</label>
                                <input 
                                    id="timer"
                                    type="file"
                                    className="text-xs file:mr-4 file:py-2 file:px-4
                                    file:border-0 file:text-xs file:font-semibold" />

                        </div>

                </div>

            </div>

            <div 
                id="rank-container"
                className="w-2/3">

            </div>
            
        </div>
    )
}