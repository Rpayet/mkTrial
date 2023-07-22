import React, { useState, useEffect, useContext } from "react";
import EntryForm from "./EntryForm";
import { formatTime } from "../../../_Services/FormatTime";
import { EventContext } from "../../../../_Provider/EventContext";
import EntryCard from "./EntryCard";
import { rankService } from "../../../_Services/RankService";

export default function UserEntry({ entry, rank, hoveredEntryKey,setHoveredEntryKey, setShowUser, setSection}) {

    const [toggleView, setToggleView] = useState(false);
    const { animation, setAnimation, entries } = useContext(EventContext);
    const [hideDelay, setHideDelay] = useState('hidden');

    const rankList = rankService(entries);
    const totalEntries = rankList.length;


    const handleEditClick = () => {
        setToggleView(true);
    };

    
    const handleShowClick = () => {
        setShowUser(entry.user.id)
        setSection('highlight')
    }
    
    useEffect(() => {
        let timeout;
    
        if (animation.firstAnimation) {
            timeout = setTimeout(() => {
                setHideDelay('visible');
                if (rank === totalEntries - 1) {
                    setTimeout(() => {
                        setAnimation({ firstAnimation: false });
                    }, totalEntries * 100);
                }
            }, (rank+1) * 100);
        }   

        return () => clearTimeout(timeout);
        
    }, [rank, totalEntries, animation ]);

    if (toggleView) {

        return <EntryForm toggleView= {toggleView} setToggleView={ setToggleView } />;
    } 

    return (
        <div className="w-full">
            <EntryCard     
                entry= { entry }
                rank= { rank }
                hoveredEntryKey= { hoveredEntryKey }
                setHoveredEntryKey= { setHoveredEntryKey }
                handleEditClick= { handleEditClick }
                handleShowClick= { handleShowClick }
                hideDelay= { hideDelay }
                formatTime={ formatTime} />
        </div>
    )

}
