import React from "react";
import NoEntry from "./NoEntry";

export default function Ranking({ event, entries, isUserRegistered }) {

    function formatTime(timeInMs) {
        const date = new Date(timeInMs);
        console.log(date);
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();
        const milliseconds = date.getUTCMilliseconds().toString().padStart(3, "0");
        return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds}`;
      }

    return(
        <>
            {!entries.length == 0 

                ?<>{entries.sort((a,b) => a.time > b.time).map((entry, i) => (

                    <div className="w-full mt-2 py-4 px-10 bg-white flex justify-between rounded-lg">

                        <div className="flex w-1/3 gap-2">

                            <span>#{i+1}</span>
                            <p>{entry.user.name}</p>

                        </div>

                        <div>
                            
                            <span className="w-1/3">{formatTime(entry.time)}</span>

                        </div>

                    </div> 


                ))}</>
                
                : <NoEntry isUserRegistered= { isUserRegistered } />
            }
        </>
        

    )
}