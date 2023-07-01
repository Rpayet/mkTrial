import React, { useContext, useEffect, useState } from "react";
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { EventContext } from "../../../../_Provider/EventContext";

export default function EntryCard({ rank, entry, user, hoveredEntryKey, setHoveredEntryKey, hideDelay, handleShowClick, handleEditClick, formatTime }) {

    const { newEntry, setNewEntry, animation } = useContext(EventContext);

    const [newEntryAnimation, setNewEntryAnimation] = useState('');

    useEffect(() => {
        let timeout;

        if (newEntry?.isNew && newEntry?.user === user.id && newEntry?.time === entry.time) {
            setNewEntryAnimation('newEntry')
            setNewEntry(null);
            timeout = setTimeout(() => {
                setNewEntryAnimation('')
            }, 1000);
        }

        return () => clearTimeout(timeout);

    }, [newEntry, setNewEntry, user, entry]);

    if (newEntry?.isNew && newEntry?.user === user.id && newEntry?.time === entry.time) {
        return <></>;
    }

    return(
        <div
            className={`w-full mt-2 py-4 px-10 bg-white flex justify-between duration-100
                        rounded-lg border-solid border-[1px] hover:border-lumi hover:scale-[1.02]
                        ${animation.rankAnimation ? hideDelay + ' zoomIn' : 'visible'} ${newEntryAnimation}`}
            onMouseEnter={() => setHoveredEntryKey(rank)}
            onMouseLeave={() => setHoveredEntryKey(null)}>

            <div className="flex w-1/3 gap-2">
                <p>#<span className="font-bold">{rank+1}</span></p>
                <p>{entry.user.name}</p>
            </div>

            { hoveredEntryKey === rank &&
                <div
                    id="options"
                    className="w-1/3 flex justify-end items-center gap-2" >
                        <AiOutlineEye 
                            title="Consulter les temps enregistrés"
                            onClick={handleShowClick}
                            className="text-silver hover:text-lumi cursor-pointer w-5 h-5" />

                    { user !== null && entry.user.name === user.name &&
                        
                        <BiEditAlt 
                            title="Ajouter un nouveau temps"
                            onClick={handleEditClick} 
                            className="text-silver hover:text-lumi cursor-pointer w-5 h-5"/>
                    }
                    
                </div>
            }
            
            <div>
                <span className="w-1/3">{formatTime(entry.time)}</span>
            </div>

        </div> 

    )
}