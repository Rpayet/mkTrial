import React, { useState } from "react";
import EntryForm from "./EntryForm";
import { formatTime } from "../../_Functions/FormatTime";

export default function UserEntry(
    { 
        user,
        event,
        entry, 
        i, 
        hoveredEntryKey,
        setHoveredEntryKey, 
        setShowUser 
    }) {

    const [toggleView, setToggleView] = useState(false);

    const handleEditClick = () => {
        setToggleView(true);
    };

    if (toggleView) {
        return <EntryForm event= { event } toggleView= {toggleView} setToggleView={ setToggleView } />;
    }

    const handleShowClick = () => {
        setShowUser(entry.user.id)
    }

    return (
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
                className="w-1/3 flex justify-end items-center gap-2" >
                    <svg
                    onClick={handleShowClick}
                        width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                        className="fill-silver hover:fill-lumi cursor-pointer">
                        <path fillRule="evenodd" clipRule="evenodd" 
                        d="M6.30147 15.5771C4.77832 14.2684 3.6904 12.7726 3.18002 12C3.6904 
                        11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 
                        6C14.1843 6 16.1261 7.07185 17.6986 8.42294C19.2218 9.73158 20.3097 
                        11.2274 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 
                        16.9282 14.1843 18 12 18C9.81574 18 7.87402 16.9282 6.30147 15.5771ZM12 
                        4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 
                        1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C2.00757 13.8624 
                        3.23268 15.5772 4.99812 17.0941C6.75717 18.6054 9.14754 20 12 20C14.8525 20 
                        17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 
                        13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C21.9925 10.1376 20.7674 
                        8.42276 19.002 6.90595C17.2429 5.39462 14.8525 4 12 4ZM10 12C10 10.8954 10.8955 
                        10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 
                        12ZM12 8C9.7909 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.7909 16 12 16C14.2092 16 
                        16 14.2091 16 12C16 9.79086 14.2092 8 12 8Z"/>
                    </svg>
                { user !== null && entry.user.name === user.name &&
                    <svg
                        onClick={handleEditClick} 
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
                }
                
            </div>
        }
            
        <div>
            <span className="w-1/3">{formatTime(entry.time)}</span>
        </div>

    </div> 

    )
}