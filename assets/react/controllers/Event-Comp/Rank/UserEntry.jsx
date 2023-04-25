import React, { useState } from "react";
import AddEntry from "./AddEntry";

export default function UserEntry({ user, sortedEntries }) {

    {/* Formate le temps stocké dans la BDD au format "m:ss:fsfsfs" */}
    function formatTime(timeInMs) {
        const date = new Date(timeInMs);
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();
        const milliseconds = date.getUTCMilliseconds().toString().padStart(3, "0");
        return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds}`;
    }

    const [hoveredEntryKey, setHoveredEntryKey] = useState(null);

    return (
        <>
            {sortedEntries.map((entry, i) => (
                    <div
                        key={i}
                        id="userEntryInfo" 
                        className="w-full mt-2 py-4 px-10 bg-white flex justify-between 
                                    rounded-lg border-solid border-[1px] hover:border-lumi hover:scale-[1.02]"
                        onMouseEnter={() => setHoveredEntryKey(i)}
                        onMouseLeave={() => setHoveredEntryKey(null)}>

                        <div className="flex w-1/3 gap-2">
                            <p>#<span className="font-bold">{i+1}</span></p>
                            <p>{entry.user.name}</p>
                        </div>

                        { hoveredEntryKey === i &&
                            <div
                                id="options"
                                className="w-1/3 flex justify-end items-center" >
                                <svg
                                    className="stroke-silver hover:stroke-lumi cursor-pointer" 
                                    width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                    <g id="Edit / Edit_Pencil_01" >
                                        <path id="Vector" d="M12 8.00012L4 16.0001V20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 
                                        5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 
                                        16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 
                                        6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 
                                        19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001" 
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        }
                            
                        <div>
                            <span className="w-1/3">{formatTime(entry.time)}</span>
                        </div>

                    </div> 
                ))}

        </>
    )
}