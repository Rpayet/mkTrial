import React, { useEffect, useState } from "react";
import RankOptions from "./RankOptions";
import AddEntry from "./AddEntry";

export default function RankSection({ event, user, entries, isUserRegistered }) {

    {/* Détermine comment afficher le formulaire */}
    const [inputEntry, setInputEntry] = useState('');
    const [newEntry, setNewEntry] = useState(true);

    {/* Hook pour déterminer si l'utilisateur a déjà créer une entrée.  */}
    useEffect(() => {

        const userEntries = entries.filter((entry) => entry.user.id === user.id);

        if ( userEntries.length > 0 && isUserRegistered ) {
            setInputEntry('edit');
        } else {
            setInputEntry('new');
            setNewEntry(true);
        }

    }, [entries, user.id]);

    return (
        <div 
            id="rank-container"
            className="w-2/3 flex flex-col items-center">
                
                <RankOptions
                        event= { event }
                        entries= { entries }
                        isUserRegistered= { isUserRegistered }
                        inputEntry= { inputEntry } />

                { newEntry && 
                    <AddEntry 
                        user= { user }
                        entries= { entries }
                        inputEntry= { inputEntry } /> 
                }
        </div>

    )
}