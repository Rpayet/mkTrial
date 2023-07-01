import React, { useState, useEffect, useContext } from "react";
import EntryForm from "./EntryForm";
import { formatTime } from "../../../_Services/FormatTime";
import { EventContext } from "../../../../_Provider/EventContext";
import EntryCard from "./EntryCard";
import { rankService } from "../../../_Services/RankService";

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

        const [toggleView, setToggleView] = useState(false);
        const { newEntry, setNewEntry, animation, setAnimation, eventData } = useContext(EventContext);
        const [hideDelay, setHideDelay] = useState('hidden');

        const { entries } = eventData;
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
        
            if (animation.rankAnimation) {
                timeout = setTimeout(() => {
                    setHideDelay('visible');
                    if (rank === totalEntries - 1) {
                        setTimeout(() => {
                            setAnimation({ rankAnimation: false });
                        }, totalEntries * 100);
                    }
                }, (rank+1) * 100);
            }   

            return () => clearTimeout(timeout);
            
        }, [rank, totalEntries, animation ]);

        if (toggleView) {

            return <EntryForm event= { event } toggleView= {toggleView} setToggleView={ setToggleView } />;
        } 

        return (
            <div className="w-full">
                <EntryCard
                    user= { user }      
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
