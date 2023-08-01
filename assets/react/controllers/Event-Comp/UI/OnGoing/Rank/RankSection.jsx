import React, { useContext, useEffect, useState } from "react";
import RankOptions from "./RankOptions";
import AddEntry from "./AddEntry";
import EntriesHighlight from "../User/EntriesHighlight";
import { EventContext } from "../../../../_Provider/EventContext";

export default function RankSection() {

    const { animation, isUserRegistered, user, entries, section, showUser } = useContext(EventContext);
    const userEntries = entries.filter((entry) => entry.user.id === user.id);
    
    if (section.ranking) {
        return (
            <div className="sm:w-2/3 flex flex-col items-center" >

                { entries.length != 0 && 
                    <p className={`w-full text-left text-xs font-bold 
                        ${animation.firstAnimation ? 'zoomIn' : 'visible'}`}>#Classement</p>}
                
                <RankOptions />

                {( (userEntries.length == 0) && (user != null) && isUserRegistered ) && 
                    <AddEntry /> }
                    
            </div>
        )
    }

    if (section.highlight) {
        return (
            <EntriesHighlight />
        )
    }
}

