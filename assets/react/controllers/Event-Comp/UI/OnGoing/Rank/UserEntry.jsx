import React, { useState, useEffect, useContext } from "react";
import EntryForm from "./EntryForm";
import { formatTime } from "../../../_Services/FormatTime";
import { EventContext } from "../../../../_Provider/EventContext";
import EntryCard from "./EntryCard";

export default function UserEntry(
    { 
        user,
        showUserEntries,
        event,
        entry, 
        rank, 
        hoveredEntryKey,
        setHoveredEntryKey, 
        setShowUser,
        setSection 
    }) {

        const [toggleView, setToggleView] = useState(false);

        const { newEntry, setNewEntry } = useContext(EventContext);

        const [hideDelay, setHideDelay] = useState('hidden');

        const handleEditClick = () => {
            setToggleView(true);
        };

        
        const handleShowClick = () => {
            setShowUser(entry.user.id)
            setSection('highlight')
        }
        
        useEffect(() => {
            let timeout;
        
            if (newEntry?.isNew && newEntry?.user === user.id && newEntry?.time === entry.time) {
                timeout = setTimeout(() => {
                    setHideDelay('');
                    setNewEntry({user: null, time: null, isNew: null})
                }, (showUserEntries.length) * 100);
            } else {
                timeout = setTimeout(() => {
                    setHideDelay('');
                }, (rank + 1) * 100);
            }
                
            return () => clearTimeout(timeout);
        }, [newEntry, showUserEntries, rank, user.id, entry.time]);

        if (toggleView) {

            return <EntryForm event= { event } toggleView= {toggleView} setToggleView={ setToggleView } />;
        } 

        return (
            <div className="w-full">
                { newEntry?.isNew && newEntry?.user === user.id && newEntry?.time === entry.time
                    ? <></>
                    : <EntryCard
                        user= { user }      
                        entry= { entry }
                        rank= { rank }
                        hoveredEntryKey= { hoveredEntryKey }
                        setHoveredEntryKey= { setHoveredEntryKey }
                        handleEditClick= { handleEditClick }
                        handleShowClick= { handleShowClick }
                        hideDelay= { hideDelay }
                        formatTime={ formatTime} />
                }
                
            </div>
        )

    }
