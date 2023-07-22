import React, { useContext, useEffect, useState } from "react";
import RankOptions from "./RankOptions";
import AddEntry from "./AddEntry";
import EntriesHighlight from "../User/EntriesHighlight";
import { EventContext } from "../../../../_Provider/EventContext";

export default function RankSection({ event, user, entries }) {

    const { animation, isUserRegistered } = useContext(EventContext);
    const [section, setSection] = useState('ranking');
    const [showUser, setShowUser] = useState(null);
        
    const showUserEntries = entries.filter((entry) => entry.user.id === showUser).sort((a, b) => a.time - b.time);

    {/* Détermine comment afficher le formulaire */}
    const [inputEntry, setInputEntry] = useState('');

    {/* Hook pour déterminer si l'utilisateur a déjà créer une entrée. */}
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
            <div className="sm:w-2/3 flex flex-col items-center" >
                    { entries.length != 0 && <p className={`w-full text-left text-xs font-bold ${animation.firstAnimation ? 'zoomIn' : 'visible'}`}>#Classement</p>}
                    <RankOptions
                        user= { user }
                        event= { event }
                        entries= { entries }
                        setShowUser= { setShowUser }
                        setSection={ setSection } />
    
                    { (inputEntry === 'new' && user != null && isUserRegistered) && <AddEntry /> }
                    
            </div>
    
        )

    }

    if (section === "highlight") {

        return (
            <EntriesHighlight
                event= { event }
                user= { user }
                showUserEntries= { showUserEntries }
                setSection= { setSection } />
        )
    }
}

