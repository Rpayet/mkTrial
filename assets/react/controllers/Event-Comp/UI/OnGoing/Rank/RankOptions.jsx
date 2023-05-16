import React from "react";
import NoEntry from "./NoEntry";
import UsersEntries from "./UsersEntries";
import { rankService } from "../../../Services/RankService";

export default function RankOptions({ user, event, entries, isUserRegistered, setShowUser, setSection }) {

    const rankList = rankService(entries);

    return (
        <>
            {rankList.length > 0 
            
                ? <UsersEntries
                    user= { user }
                    event= { event } 
                    rankList= { rankList }
                    setShowUser= { setShowUser }
                    setSection= { setSection } />

                : <NoEntry isUserRegistered={isUserRegistered} />
            }
        </>
    );
}
