import React, { useState, useEffect } from "react";
import EntryForm from "./EntryForm";
import { formatTime } from "../../../_Services/FormatTime";
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';

export default function UserEntry(
    { 
        user,
        event,
        entry, 
        rank, 
        hoveredEntryKey,
        setHoveredEntryKey, 
        setShowUser,
        setSection 
    }) {

    const [hideDelay, setHideDelay] = useState('hidden');

    const [toggleView, setToggleView] = useState(false);

    const handleEditClick = () => {
        setToggleView(true);
    };

    
    const handleShowClick = () => {
        setShowUser(entry.user.id)
        setSection('highlight')
    }
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setHideDelay('');
        }, (rank + 1) * 100);
        
        return () => clearTimeout(timeout);
    }, []);

    if (toggleView) {
        return <EntryForm event= { event } toggleView= {toggleView} setToggleView={ setToggleView } />;
    } else {
        return (
            <div
            className={`w-full mt-2 py-4 px-10 bg-white flex justify-between duration-100
                        rounded-lg border-solid border-[1px] hover:border-lumi hover:scale-[1.02]
                        ${hideDelay} slideScaleLeft`}
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

}