import React, { useEffect, useState } from "react";
import RankOptions from "./RankOptions";
import AddEntry from "./AddEntry";
import EntriesHighlight from "../User/EntriesHighlight";

export default function RankSection({ event, user, entries, isUserRegistered }) {

    const [section, setSection] = useState('ranking');
    const [showUser, setShowUser] = useState(null);
    
    const showUserEntries = entries.filter((entry) => entry.user.id === showUser).sort((a, b) => a.time - b.time);

    {/* Détermine comment afficher le formulaire */}
    const [inputEntry, setInputEntry] = useState('');

    {/* Hook pour déterminer si l'utilisateur a déjà créer une entrée.  */}
    if ( user ) {

        useEffect(() => {

            const userEntries = entries.filter((entry) => entry.user.id === user.id);
    
            if ( userEntries.length > 0 && isUserRegistered ) {
                setInputEntry('edit');
            } else if ( userEntries.length == 0 && isUserRegistered ) {
                setInputEntry('new');
            }
    
        }, [entries, user.id]);

    }
    
    if (section === 'ranking') {

        return (
            <div 
                id="rank-container"
                className="sm:w-2/3 flex flex-col items-center">
                    
                    <RankOptions
                        user= { user }
                        event= { event }
                        entries= { entries }
                        isUserRegistered= { isUserRegistered }
                        setShowUser= { setShowUser }
                        setSection={ setSection } />
    
                    { inputEntry === 'new' && user != null &&
                        <AddEntry event= { event } /> 
                    }
            </div>
    
        )

    }

    if (section === "highlight") {

        return (
            <EntriesHighlight
                showUserEntries= { showUserEntries }
                setSection= { setSection } />
        )
    }
}
