import React from "react";
import NoEntry from "./NoEntry";
import UsersEntries from "./UsersEntries";
import { rankService } from "../../../_Services/RankService";

export default function RankOptions({ user, event, entries, setShowUser, setSection }) {

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

                : <NoEntry />
            }
        </>
    );
}
